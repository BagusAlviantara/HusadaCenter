const User = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.Login = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
        return res.status(400).json({ msg: "Wrong Password" });
    }

    // bcrypt.compare(user.password,user.password)
    //     .then(match=>{
    //         if (!match) {
    //                return res.status(400).json({ msg: "Wrong Password" });
    //             }
    //     }).catch(err => {
    //         console.log(err);
    //     })
    req.session.userId = user.id;
    const id = user.id;
    const email = user.email;
    const role = user.role;
    //const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });

    res.status(200).json({ id, email, role });
    // const accessToken = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: '20s'
    // });
    // const refreshToken = jwt.sign({ id, email }, process.env.REFRESH_TOKEN_SECRET, {
    //     expiresIn: '1d'
    // });
    // await User.update({ refresh_token: refreshToken }, {
    //     where: {
    //         id: user.id
    //     }
    // });
    // res.cookie('refreshToken', refreshToken, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000
    // });
    // res.status(200).json({ id, email, role, accessToken });
}

exports.LoginUser = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await bcrypt.compare(user.password, req.body.password);
    if (!match) {
        return res.status(400).json({ msg: "Wrong Password" });
    }
    try {
        req.session.userId = user.id;
        if (user.role === "Customer") {
            const id = user.id;
            const email = user.email;
            const role = user.role;
            const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
            res.status(200).json({ id, email, role, "token": token });
        } else if (user.role === "Dukun") {
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

exports.LoginGoogle = async(req, res) => {

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

exports.Logout = async(req, res) => {
    // const refreshToken = req.cookies.refreshToken;
    // if (!refreshToken) return res.sendStatus(204);
    // const user = await User.findAll({
    //     where: {
    //         refresh_token: refreshToken
    //     }
    // });
    // if (!user) return res.sendStatus(204);
    // const userId = user.id;
    // await User.update({ refresh_token: null }, {
    //     where: {
    //         id: userId
    //     }
    // });
    // res.clearCookie('refreshToken');
    // return res.sendStatus(200);

    req.session.destroy((err) => {
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