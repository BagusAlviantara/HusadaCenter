const express = require("express");
const {
    getBalian,
    getBalianById,
    createBalian,
    updateBalian,
    updateBalianbyUserId,
    deleteBalian
} = require("../controllers/Balian.js");
const { verifyUser, adminOnly, balianAdmin } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/balian', verifyUser, getBalian);
router.get('/balian/:id', verifyUser, getBalianById);
router.post('/balian', verifyUser, balianAdmin, createBalian);
router.patch('/balian/:id', verifyUser, balianAdmin, updateBalian);
router.patch('/balian-by-user/:id', verifyUser, balianAdmin, updateBalianbyUserId);
router.delete('/balian/:id', verifyUser, adminOnly, deleteBalian);

module.exports = router;