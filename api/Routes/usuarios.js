const { Router } = require ('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require ('../Models/Usuarios.js');
const { emailRegistro } = require('../helpers/mail.js');
const { usuarioSesion, perfil } = require('./usuarioControllers.js');

const router = Router();

//REGISTRO DE USUARIO
router.post('/registro', async(req, res) => {
    try {
        const { nombre, email, password, avatar } = req.body;
        const nombreRep = await Usuario.findOne({ nombre });
        const emailRep = await Usuario.findOne({ email });

        if(nombreRep || emailRep) {
            const error = (
                nombreRep ? 'El nombre de usuario ya existe' : 'El email ya está registrado'
            );
            res.status(400).json({ msg: error })
        } else {
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(password, saltRounds);

            const tok = nombre + Math.random().toString(32).substring(10);

            const nuevoUser = new Usuario({
                nombre,
                email,
                password: passwordHash,
                avatar: avatar,
                token: tok
            });
            await nuevoUser.save();

            emailRegistro({
                nombre,
                email,
                token: tok
            })

            res.json({msg: 'El usuario fue creado, revise su casilla de mail para confirmar la cuenta'})
        }
   
    } catch (error) {
        res.status(400).json({ msg: error.response.data.msg })
    }
});

router.put('/confirmarEmail/:token', async(req,res) => {
    try {
        const {token} = req.params;
        const usuarioConf = await Usuario.findOne({token});

        if(usuarioConf && usuarioConf.confirmado === false) {
            usuarioConf.confirmado = true;
            usuarioConf.token = '';
            await usuarioConf.save();

            res.json({msg: `${usuarioConf.nombre} ya has confirmado tu cuenta. Ya puedes loguearte`})
        }else if (!usuarioConf) {

            res.status(400).json({msg: 'El token de confirmacion no es válido'})
        }
        
    } catch (error) {
        console.log(error)
    }

});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({email});

        if (!usuario) {
            res.status(400).json({msg: 'No existe un usuario registrado con el email ingresado.'})
        } else {
            const pass = await bcrypt.compare(password, usuario.password);
            if (usuario.confirmado === false) {
                const tok = nombre + Math.random().toString(32).substring(10);
                usuario.token = tok;
                usuario.save();
    
                emailRegistro({
                    nombre: usuario.nombre,
                    email,
                    token: tok
                })
    
                res.status(400).json({msg: 'La cuenta no ha sido confirmada. Revise su email para confirmar la cuenta'})
            } else if (pass === false){
                res.status(400).json({msg: 'Password incorrecto'})    
            } else if (pass === true) {
                  // create token
                const token = jwt.sign({
                    nombre: usuario.nombre,
                    id: usuario._id
                }, process.env.TOKEN_SECRET)

                console.log(token)

                res.json({
                    token: `Bearer ${token}`,
                    mensaje: {msg: `Hola ${usuario.nombre}!!!`},
                })

            }

        }
    } catch (error) {
        console.log(error)
    }

});

router.get('/perfil', usuarioSesion, perfil);


module.exports = router;

