const express = require('express');
const router = express.Router();
const lenguaje = require("../controllers/lenguajesController");

router.get('/lenguaje', lenguaje.getAll);
router.get('/lenguaje/:id', lenguaje.getOne);

module.exports = router;
