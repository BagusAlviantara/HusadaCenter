const Obat = require("../models/ObatModel.js");
const { Op } = require("sequelize");

exports.getObat = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Obat.findAll({
                attributes: ['id', 'name', 'description', 'stock', 'price']

            });
        } else if (req.role = "Customer") {
            response = await Obat.findAll({
                attributes: ['id', 'name', 'description', 'stock', 'price']
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getObatById = async(req, res) => {
    try {
        const obat = await Obat.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!obat) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Obat.findOne({
                attributes: ['id', 'name', 'description', 'stock', 'price'],
                where: {
                    id: obat.id
                }
            });
        } else {
            response = await Obat.findOne({
                attributes: ['id', 'name', 'description', 'stock', 'price'],
                where: {
                    [Op.and]: [{ id: obat.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createObat = async(req, res) => {
    const { id, name, description, stock, price } = req.body;
    try {
        await Obat.create({
            id: id,
            name: name,
            description: description,
            stock: stock,
            price: price
        });
        res.status(201).json({ msg: "Obat Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateObat = async(req, res) => {
    try {
        const obat = await Obat.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!obat) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, name, description, stock, price } = req.body;
        if (req.role === "Admin") {
            await Obat.update({ id, name, description, stock, price }, {
                where: {
                    id: obat.id
                }
            });
        }
        res.status(200).json({ msg: "Obat updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteObat = async(req, res) => {
    try {
        const obat = await Obat.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!obat) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, name, description, stock, price } = req.body;
        if (req.role === "Admin") {
            await Obat.destroy({
                where: {
                    id: obat.id
                }
            });
        }
        res.status(200).json({ msg: "Obat deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}