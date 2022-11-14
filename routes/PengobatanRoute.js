const express = require("express");
const {
    getPengobatan,
    getPengobatanById,
    createPengobatan,
    updatePengobatan,
    deletePengobatan
} = require("../controllers/Pengobatan.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get('/pengobatan', verifyUser, getPengobatan);
router.get('/pengobatan/:id', verifyUser, getPengobatanById);
router.post('/pengobatan', verifyUser, adminOnly, createPengobatan);
router.patch('/pengobatan/:id', verifyUser, adminOnly, updatePengobatan);
router.delete('/pengobatan/:id', verifyUser, adminOnly, deletePengobatan);

module.exports = router;