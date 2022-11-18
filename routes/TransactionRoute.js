const express = require("express");
const {
    getTransaction,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require("../controllers/Transaction.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/transaction', verifyUser, getTransaction);
router.get('/transaction/:id', verifyUser, getTransactionById);
router.post('/transaction', verifyUser, adminOnly, createTransaction);
router.patch('/transaction/:id', verifyUser, adminOnly, updateTransaction);
router.delete('/transaction/:id', verifyUser, adminOnly, deleteTransaction);

module.exports = router;