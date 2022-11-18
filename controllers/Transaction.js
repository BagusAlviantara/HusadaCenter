const Transaction = require("../models/TransactionModel.js");
const { Op } = require("sequelize");

exports.getTransaction = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Transaction.findAll({
                attributes: ['id', 'customer_id', 'obat_id', 'date', 'qty', 'description']

            });
        } else if (req.role = "Customer") {
            response = await Transaction.findAll({
                attributes: ['id', 'customer_id', 'obat_id', 'date', 'qty', 'description']
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getTransactionById = async(req, res) => {
    try {
        const transaction = await Transaction.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!transaction) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Transaction.findOne({
                attributes: ['id', 'customer_id', 'obat_id', 'date', 'qty', 'description'],
                where: {
                    id: transaction.id
                }
            });
        } else {
            response = await Transaction.findOne({
                attributes: ['id', 'customer_id', 'obat_id', 'date', 'qty', 'description'],
                where: {
                    [Op.and]: [{ id: transaction.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createTransaction = async(req, res) => {
    const { id, customer_id, obat_id, date, qty, description } = req.body;
    try {
        await Transaction.create({
            id: id,
            customer_id: customer_id,
            obat_id: obat_id,
            date: date,
            qty: qty,
            description: description
        });
        res.status(201).json({ msg: "Transaction Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!transaction) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, customer_id, obat_id, date, qty, description } = req.body;
        if (req.role === "Admin") {
            await Transaction.update({ id, customer_id, obat_id, date, qty, description }, {
                where: {
                    id: transaction.id
                }
            });
        }
        res.status(200).json({ msg: "Transaction updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!transaction) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, customer_id, obat_id, date, qty, description } = req.body;
        if (req.role === "Admin") {
            await Transaction.destroy({
                where: {
                    id: transaction.id
                }
            });
        }
        res.status(200).json({ msg: "Transaction deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}