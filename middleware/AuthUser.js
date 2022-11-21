const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");


exports.verifyUser = async(req, res, next) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
        }
        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        req.userId = user.id;
        req.role = user.role;
        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

    // try {
    //     const authHeader = req.headers['authorization'];
    //     const token = authHeader && authHeader.split(' ')[1];
    //     if (token == null) {
    //         return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
    //     }
    //     const user = await User.findOne({
    //         where: {
    //             id: req.body.userId
    //         }
    //     });
    //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //         if (err) return res.status(404).json({ msg: "User tidak ditemukan" });
    //         req.email = decoded.email;
    //         req.userId = user.id;
    //         req.role = user.role;
    //         next();
    //     })
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }
}

exports.adminOnly = async(req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        if (user.role !== "Admin") return res.status(403).json({ msg: "Akses terlarang" });

        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.balianAdmin = async(req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        if (user.role === "Balian" || user.role === "Admin") return res.status(403).json({ msg: "Akses terlarang" });

        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.customerOnly = async(req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        if (user.role === "Customer") {
            next();
        } else {
            return res.status(403).json({ msg: "Akses terlarang" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.customerAdmin = async(req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        if (user.role === "Customer" || user.role === "Admin") {
            next();
        } else {
            return res.status(403).json({ msg: "Akses terlarang" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.verifyUserJwt = async(req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.email = decoded.email;
            next();
        })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}