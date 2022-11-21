const express = require("express");
const {
    getCustomer,
    getCustomerById,
    createCustomer,
    updateCustomer,
    updateCustomerbyUserId,
    deleteCustomer
} = require("../controllers/Customer.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/customer', verifyUser, adminOnly, getCustomer);
router.get('/customer/:id', verifyUser, adminOnly, getCustomerById);
router.post('/customer', verifyUser, adminOnly, createCustomer);
router.patch('/customer/:id', verifyUser, adminOnly, updateCustomer);
router.patch('/customer-by-user/:id', verifyUser, adminOnly, updateCustomerbyUserId);
router.delete('/customer/:id', verifyUser, adminOnly, deleteCustomer);

module.exports = router;