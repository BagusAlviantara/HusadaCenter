const express = require("express");
const {
    getPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
} = require("../controllers/Payment.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/payment', verifyUser, getPayment);
router.get('/payment/:id', verifyUser, getPaymentById);
router.post('/payment', verifyUser, adminOnly, createPayment);
router.patch('/payment/:id', verifyUser, adminOnly, updatePayment);
router.delete('/payment/:id', verifyUser, adminOnly, deletePayment);

module.exports = router;