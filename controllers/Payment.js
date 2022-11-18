const Payment = require("../models/PaymentModel.js");
const { Op } = require("sequelize");

exports.getPayment = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Payment.findAll({
                attributes: ['id', 'trans_id', 'date_payment', 'total_payment']

            });
        } else if (req.role = "Customer") {
            response = await Payment.findAll({
                attributes: ['id', 'trans_id', 'date_payment', 'total_payment']
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getPaymentById = async(req, res) => {
    try {
        const payment = await Payment.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!payment) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Payment.findOne({
                attributes: ['id', 'trans_id', 'date_payment', 'total_payment'],
                where: {
                    id: payment.id
                }
            });
        } else {
            response = await Payment.findOne({
                attributes: ['id', 'trans_id', 'date_payment', 'total_payment'],
                where: {
                    [Op.and]: [{ id: payment.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createPayment = async(req, res) => {
    const { id, trans_id, date_payment, total_payment } = req.body;
    try {
        await Payment.create({
            id: id,
            trans_id: trans_id,
            date_payment: date_payment,
            total_payment: total_payment
        });
        res.status(201).json({ msg: "Payment Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updatePayment = async(req, res) => {
    try {
        const payment = await Payment.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!payment) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, trans_id, date_payment, total_payment } = req.body;
        if (req.role === "Admin") {
            await Payment.update({ id, trans_id, date_payment, total_payment }, {
                where: {
                    id: payment.id
                }
            });
        }
        res.status(200).json({ msg: "Payment updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deletePayment = async(req, res) => {
    try {
        const payment = await Payment.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!payment) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, trans_id, date_payment, total_payment } = req.body;
        if (req.role === "Admin") {
            await Payment.destroy({
                where: {
                    id: payment.id
                }
            });
        }
        res.status(200).json({ msg: "Payment deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}