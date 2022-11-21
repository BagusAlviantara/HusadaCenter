const express = require("express");
const {
    getAlternatif,
    getAlternatifById,
    createAlternatif,
    updateAlternatif,
    deleteAlternatif
} = require("../controllers/AlternatifBalian.js");
const { verifyUser, adminOnly, balianAdmin } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/alternatif-balian', verifyUser, getAlternatif);
router.get('/alternatif-balian/:id', verifyUser, getAlternatifById);
router.post('/alternatif-balian', verifyUser, balianAdmin, createAlternatif);
router.patch('/alternatif-balian/:id', verifyUser, balianAdmin, updateAlternatif);
router.delete('/alternatif-balian/:id', verifyUser, balianAdmin, deleteAlternatif);

module.exports = router;