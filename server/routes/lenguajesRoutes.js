const express = require('express');
const router = express.Router();
const lenguaje = require("../controllers/lenguajesController");

router.get('/lenguaje', lenguaje.getAll);
router.post('/lenguaje', lenguaje.create);
router.get('/lenguaje/:id', lenguaje.getOne);

module.exports = router;
