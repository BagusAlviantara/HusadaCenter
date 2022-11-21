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
router.post('/pengobatan', verifyUser, createPengobatan);
router.patch('/pengobatan/:id', verifyUser, updatePengobatan);
router.delete('/pengobatan/:id', verifyUser, deletePengobatan);

module.exports = router;