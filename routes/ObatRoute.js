const express = require("express");
const {
    getObat,
    getObatById,
    createObat,
    updateObat,
    deleteObat
} = require("../controllers/Obat.js");
const { verifyUser, adminOnly, balianAdmin } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/obat', verifyUser, getObat);
router.get('/obat/:id', verifyUser, getObatById);
router.post('/obat', verifyUser, createObat);
router.patch('/obat/:id', verifyUser, updateObat);
router.delete('/obat/:id', verifyUser, adminOnly, deleteObat);

module.exports = router;