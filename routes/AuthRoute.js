const express = require("express");
const { Login, Logout, Me, isAuth, LoginUser } = require("../controllers/Auth.js");
const { refreshToken } = require("../controllers/RefreshToken.js");
const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.post('/login-user', LoginUser);
router.delete('/logout', Logout);
router.get('/token', refreshToken);
router.get('/private', isAuth);



module.exports = router;