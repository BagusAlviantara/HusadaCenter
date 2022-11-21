const express = require("express");
const {
    getBalian,
    getBalianById,
    createBalian,
    updateBalian,
    updateBalianbyUserId,
    deleteBalian
} = require("../controllers/Balian.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/balian', verifyUser, adminOnly, getBalian);
router.get('/balian/:id', verifyUser, adminOnly, getBalianById);
router.post('/balian', verifyUser, adminOnly, createBalian);
router.patch('/balian/:id', verifyUser, adminOnly, updateBalian);
router.patch('/balian-by-user/:id', verifyUser, adminOnly, updateBalianbyUserId);
router.delete('/balian/:id', verifyUser, adminOnly, deleteBalian);

module.exports = router;