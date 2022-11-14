const express = require("express");
const {
    getUsers,
    getUserById,
    getUsersbyCustomer,
    getUsersbyDukun,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/Users.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.get('/users-customer', verifyUser, adminOnly, getUsersbyCustomer);
router.get('/users-dukun', verifyUser, adminOnly, getUsersbyDukun);
router.post('/users', createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

module.exports = router;