const express = require("express");
const {
    getMidtrans,
    postMidtrans,
} = require("../controllers/Midtrans.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/midtrans', verifyUser, getMidtrans);
router.post('/midtrans', verifyUser, postMidtrans);

module.exports = router;