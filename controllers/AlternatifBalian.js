const Alternatif = require("../models/AlternatifBalianModel.js");
const { Op } = require("sequelize");

exports.getAlternatif = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Alternatif.findAll({
                attributes: ['id', 'balian_id', 'pengobatan_id']

            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getAlternatifById = async(req, res) => {
    try {
        const alternatif = await Alternatif.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!alternatif) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Alternatif.findOne({
                attributes: ['id', 'balian_id', 'pengobatan_id'],
                where: {
                    id: alternatif.id
                }
            });
        } else {
            response = await Alternatif.findOne({
                attributes: ['id', 'balian_id', 'pengobatan_id'],
                where: {
                    [Op.and]: [{ id: alternatif.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createAlternatif = async(req, res) => {
    const { id, balian_id, pengobatan_id } = req.body;
    try {
        await Alternatif.create({
            id: id,
            balian_id: balian_id,
            pengobatan_id: pengobatan_id
        });
        res.status(201).json({ msg: "Alternatif Pengobatan Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateAlternatif = async(req, res) => {
    try {
        const alternatif = await Alternatif.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!alternatif) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, balian_id, pengobatan_id } = req.body;
        if (req.role === "Admin") {
            await Alternatif.update({ id, balian_id, pengobatan_id }, {
                where: {
                    id: alternatif.id
                }
            });
        }
        res.status(200).json({ msg: "Pengobatan updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteAlternatif = async(req, res) => {
    try {
        const alternatif = await Alternatif.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!alternatif) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { id, balian_id, pengobatan_id } = req.body;
        if (req.role === "Admin") {
            await Alternatif.destroy({
                where: {
                    id: alternatif.id
                }
            });
        }
        res.status(200).json({ msg: "Pengobatan deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}