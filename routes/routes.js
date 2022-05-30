const express = require("express");

const router = express.Router();

const { getAllMahasiswa, createMahasiswa, updateMahasiswa, deleteMahasiswa } = require("../controller/controller");

router.get("/mahasiswa", getAllMahasiswa);

router.post("/mahasiswa", createMahasiswa);

router.put("/mahasiswa/:id", updateMahasiswa);

router.delete("/mahasiswa/:id", deleteMahasiswa);

module.exports = router;
