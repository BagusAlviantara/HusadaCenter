const express = require("express");
const {
    getCustomer,
    getCustomerById,
    createCustomer,
    updateCustomer,
    updateCustomerbyUserId,
    deleteCustomer
} = require("../controllers/Customer.js");
const { verifyUser, adminOnly, customerAdmin } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/customer', verifyUser, customerAdmin, getCustomer);
router.get('/customer/:id', verifyUser, adminOnly, getCustomerById);
router.post('/customer', verifyUser, customerAdmin, createCustomer);
router.patch('/customer/:id', verifyUser, customerAdmin, updateCustomer);
router.patch('/customer-by-user/:id', verifyUser, customerAdmin, updateCustomerbyUserId);
router.delete('/customer/:id', verifyUser, customerAdmin, deleteCustomer);

module.exports = router;