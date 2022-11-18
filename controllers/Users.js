const User = require("../models/UserModel.js");
const argon2 = require("argon2");

exports.getUsers = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'email', 'password', 'name', 'phone', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getUsersbyCustomer = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'email', 'password', 'name', 'phone', 'role'],
            where: {
                role: "Customer"
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getUsersbyDukun = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'email', 'password', 'name', 'phone', 'role'],
            where: {
                role: "Dukun"
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
exports.getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            attributes: ['id', 'email', 'password', 'name', 'phone', 'role'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (user) {
        return res.status(409).json({ msg: "email already exists" });
    }

    const { email, password, confPassword, name, phone, role } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            email: email,
            password: hashPassword,
            name: name,
            phone: phone,
            role: role
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.registerCustomer = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (user) {
        return res.status(409).json({ msg: "email already exists" });
    }
    const { email, password, confPassword, name, phone, role } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            email: email,
            password: hashPassword,
            name: name,
            phone: phone,
            role: "Customer"
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.updateUser = async(req, res) => {
    //Check id user
    const user = await User.findOne({
        where: {
            id: req.params.id,
        }
    });
    if (!user) {
        return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    const { email, password, confPassword, name, phone, role } = req.body;
    let hashPassword;
    if (password === "" || password === null) {
        hashPassword = user.password
    } else {
        hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    try {
        await User.update({
            email: email,
            password: hashPassword,
            name: name,
            phone: phone,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.updateUserName = async(req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const { name, phone } = req.body;
    try {
        await User.update({
            name: name,
            phone: phone,
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


exports.deleteUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    try {
        await User.destroy({
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}