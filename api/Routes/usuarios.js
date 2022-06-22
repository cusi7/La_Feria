const { Router } = require ('express');
const bcrypt = require ('bcrypt');
const Usuario = require ('../Models/Usuarios.js');
const { emailRegistro } = require('../helpers/mail.js');

const router = Router();

//REGISTRO DE USUARIO
router.post('/registro', async(req, res) => {
    try {
        const { nombre, email, password, avatar } = req.body;
        const nombreRep = await Usuario.findOne({ nombre });
        const emailRep = await Usuario.findOne({ email });

        if(nombreRep || emailRep) {
            const error = new Error(
                nombreRep ? 'El nombre de usuario ya existe' : 'El email ya está registrado'
            );
            res.status(400).json({ msg: error.message })
        } else {
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(password, saltRounds);

            const tok = nombre + Math.random().toString(32).substring(10);
            const tokAuth = await bcrypt.hash(tok, saltRounds);

            const nuevoUser = new Usuario({
                nombre,
                email,
                password: passwordHash,
                avatar: avatar,
                token: tokAuth
            });
            await nuevoUser.save();

            emailRegistro({
                nombre,
                email,
                token: tokAuth
            })

            res.send('El usuario fue creado, revise su casilla de mail para confirmar la cuenta')
        }
   
    } catch (error) {
        res.json({ msg: error.message })
    }
});

module.exports = router;

