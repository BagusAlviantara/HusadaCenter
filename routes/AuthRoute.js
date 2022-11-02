const express = require("express");
const { Login, Logout, Me, isAuth, LoginUser } = require("../controllers/Auth.js");

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.post('/login-user', LoginUser);
router.delete('/logout', Logout);
router.get('/private', isAuth);

module.exports = router;