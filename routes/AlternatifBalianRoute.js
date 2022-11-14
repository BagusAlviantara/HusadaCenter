const express = require("express");
const {
    getAlternatif,
    getAlternatifById,
    createAlternatif,
    updateAlternatif,
    deleteAlternatif
} = require("../controllers/AlternatifBalian.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/alternatif-balian', verifyUser, adminOnly, getAlternatif);
router.get('/alternatif-balian/:id', verifyUser, adminOnly, getAlternatifById);
router.post('/alternatif-balian', verifyUser, adminOnly, createAlternatif);
router.patch('/alternatif-balian/:id', verifyUser, adminOnly, updateAlternatif);
router.delete('/alternatif-balian/:id', verifyUser, adminOnly, deleteAlternatif);

module.exports = router;