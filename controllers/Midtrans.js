const Transaction = require("../models/TransactionModel.js");
const { Op } = require("sequelize");


const midtransClient = require('midtrans-client');
// const { route } = require('.');
// Create Core API instance
var coreApi = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: 'Mid-server-cRhxx3ntLFIRP2a98litO2B5',
    clientKey: 'Mid-client-EKMAKrxouFFA4Asy'
});
exports.getMidtrans = function(req, res, next) {
    Transaction.findAll().then(data => {
        var tampilData = data.map(item => {
            return {
                id: item.id,
                customer_id: item.customer_id,
                obat_id: item.obat_id,
                date: item.date,
                qty: item.qty,
                description: item.description,
                response_midtrans: JSON.parse(item.response_midtrans),
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }
        });
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: tampilData
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal tampil: " + err.message,
            data: []
        });
    });
};

exports.postMidtrans = function(req, res, next) {
    coreApi.charge(req.body).then((chargeResponse) => {
        var dataOrder = {
            id: chargeResponse.id,
            customer_id: req.body.customer_id,
            obat_id: req.body.obat_id,
            date: req.body.date,
            qty: req.body.qty,
            description: req.body.description,
            response_midtrans: JSON.stringify(chargeResponse)
        }
        Transaction.create(dataOrder).then(data => {
            res.json({
                status: true,
                pesan: "Berhasil Order",
                data: data
            });
        }).catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Order: " + err.message,
                data: []
            });
        });
    }).catch((e) => {
        res.json({
            status: false,
            pesan: "Gagal order: " + e.message,
            data: []
        });
    });
};