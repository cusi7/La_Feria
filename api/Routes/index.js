const { Router } = require('express');

const usuarios = require('./usuarios.js');

const router = Router();

// Configurar los routers
router.use('/usuario', usuarios);


module.exports = router;
