const Balian = require("../models/BalianModel.js");
const User = require("../models/UserModel.js");
const { Op } = require("sequelize");

exports.getBalian = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Balian.findAll({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age', 'description'],
                include: [
                    { model: User }
                ]

            });
        } else if (req.role = "Balian") {
            response = await Balian.findAll({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age', 'description'],
                include: [
                    { model: User }
                ]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getBalianById = async(req, res) => {
    try {
        const balian = await Balian.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!balian) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Balian.findOne({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age', 'description'],
                where: {
                    id: balian.id,
                },
                include: [
                    { model: User }
                ]
            });
        } else {
            response = await Balian.findOne({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age', 'description'],
                where: {
                    [Op.and]: [{ id: balian.id }]
                },
                include: [
                    { model: User }
                ]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createBalian = async(req, res) => {
    const balian = await Balian.findOne({
        where: {
            user_id: req.body.user_id,
        }
    });
    if (balian) {
        return res.status(409).json({ msg: "User ID already exists, Input different User ID" });
    }
    const { id, user_id, name, phone, address, gender, age, description } = req.body;
    try {
        await Balian.create({
            id: id,
            user_id: user_id,
            name: name,
            phone: phone,
            address: address,
            gender: gender,
            age: age,
            description: description,
        });
        res.status(201).json({ msg: "Balian Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateBalian = async(req, res) => {
    try {
        const balian = await Balian.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!balian) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { user_id, name, phone, address, gender, age, description } = req.body;
        if (req.role === "Admin") {
            await Balian.update({ user_id, name, phone, address, gender, age, description }, {
                where: {
                    id: balian.id
                }
            });
        }
        res.status(200).json({ msg: "Balian updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateBalianbyUserId = async(req, res) => {
    try {
        const balian = await Balian.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!balian) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { user_id, name, phone, address, gender, age, description } = req.body;
        if (req.role === "Admin") {
            await Balian.update({ user_id, name, phone, address, gender, age, description }, {
                where: {
                    id: balian.user_id
                }
            });
        }
        res.status(200).json({ msg: "Balian updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteBalian = async(req, res) => {
    try {
        const balian = await Balian.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!balian) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { user_id, name, phone, address, gender, age } = req.body;
        if (req.role === "Admin") {
            await Balian.destroy({
                where: {
                    id: balian.id
                }
            });
        }
        res.status(200).json({ msg: "Balian deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}