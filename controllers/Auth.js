const User = require("../models/UserModel.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

exports.Login = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) {
        return res.status(400).json({ msg: "Wrong Password" });
    }
    req.session.userId = user.id;
    const id = user.id;
    const email = user.email;
    const role = user.role;
    const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ id, email, role, "token": token });
}

exports.LoginUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) {
        return res.status(400).json({ msg: "Wrong Password" });
    }
    try {
        req.session.userId = user.id;
        if (user.role === "Student") {
            const id = user.id;
            const email = user.email;
            const role = user.role;
            const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
            res.status(200).json({ id, email, role, "token": token });
        } else if (user.role === "Employee") {
            const id = user.id;
            const email = user.email;
            const role = user.role;
            const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
            res.status(200).json({ id, email, role, "token": token });
        } else {
            return res.status(401).json({ msg: "Mohon login menggunakan akun anda!" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

exports.Me = async(req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
    }
    const user = await User.findOne({
        attributes: ['id', 'email', 'role'],
        where: {
            id: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json(user);
}

exports.Logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
        res.status(200).json({ msg: "Anda telah logout" });
    });
}

exports.LogoutStudent = (req, res) => {
    jwt.destroy(token, (err) => {
        if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
        res.status(200).json({ msg: "Anda telah logout" });
    });
}

exports.isAuth = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ msg: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ msg: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ msg: 'unauthorized' });
    } else {
        res.status(200).json({ msg: 'here is your resource' });
    };
    next();
}