const Customer = require("../models/CustomerModel.js");
const { Op } = require("sequelize");

exports.getCustomer = async(req, res) => {
    try {
        let response;
        if (req.role === "Admin") {
            response = await Customer.findAll({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age']

            });
        } else if (req.role = "Customer") {
            response = await Customer.findAll({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age']
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getCustomerById = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!customer) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "Admin") {
            response = await Customer.findOne({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age'],
                where: {
                    id: customer.id
                }
            });
        } else {
            response = await Customer.findOne({
                attributes: ['id', 'user_id', 'name', 'phone', 'address', 'gender', 'age'],
                where: {
                    [Op.and]: [{ id: customer.id }]
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createCustomer = async(req, res) => {
    const customer = await Customer.findOne({
        where: {
            user_id: req.body.user_id,
        }
    });
    if (customer) {
        return res.status(409).json({ msg: "User ID already exists, Input different User ID" });
    }
    const { id, user_id, name, phone, address, gender, age } = req.body;
    try {
        await Customer.create({
            id: id,
            user_id: user_id,
            name: name,
            phone: phone,
            address: address,
            gender: gender,
            age: age
        });
        res.status(201).json({ msg: "Customer Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!customer) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { user_id, name, phone, address, gender, age } = req.body;
        if (req.role === "Admin") {
            await Customer.update({ user_id, name, phone, address, gender, age }, {
                where: {
                    id: customer.id
                }
            });
        }
        res.status(200).json({ msg: "Customer updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteCustomer = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!customer) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { user_id, name, phone, address, gender, age } = req.body;
        if (req.role === "Admin") {
            await Customer.destroy({
                where: {
                    id: customer.id
                }
            });
        }
        res.status(200).json({ msg: "Customer deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}