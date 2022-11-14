const Pengobatan = require("../models/PengobatanModel.js");
const { Op } = require("sequelize");

exports.getPengobatan = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Pengobatan.findAll({
                attributes: ['id', 'name', 'description']

            });
        } else if (req.role = "Customer") {
            response = await Pengobatan.findAll({
                attributes: ['id', 'name', 'description']
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getPengobatanById = async(req, res) => {
    try {
        const pengobatan = await Pengobatan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!pengobatan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Pengobatan.findOne({
                attributes: ['id', 'name', 'description'],
                where: {
                    id: pengobatan.id
                }
            });
        } else {
            response = await Pengobatan.findOne({
                attributes: ['id', 'name', 'description'],
                where: {
                    [Op.and]: [{ id: pengobatan.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createPengobatan = async(req, res) => {
    const { id, name, description } = req.body;
    try {
        await Pengobatan.create({
            id: id,
            name: name,
            description: description,
        });
        res.status(201).json({ msg: "Pengobatan Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updatePengobatan = async(req, res) => {
    try {
        const pengobatan = await Pengobatan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!pengobatan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, name, description } = req.body;
        if (req.role === "Admin") {
            await Pengobatan.update({ id, name, description }, {
                where: {
                    id: pengobatan.id
                }
            });
        }
        res.status(200).json({ msg: "Pengobatan updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deletePengobatan = async(req, res) => {
    try {
        const pengobatan = await Pengobatan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!pengobatan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, name, description } = req.body;
        if (req.role === "Admin") {
            await Pengobatan.destroy({
                where: {
                    id: pengobatan.id
                }
            });
        }
        res.status(200).json({ msg: "Pengobatan deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}