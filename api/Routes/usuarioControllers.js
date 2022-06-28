const jwt = require('jsonwebtoken');
const Usuario = require ('../Models/Usuarios.js');

const usuarioSesion = async(req, res, next) => {
    try {
         const authHeader = req.headers["authorization"];
         const token = authHeader && authHeader.split(" ")[1];//Saca el Bearer

         if(!token) {
            return res.status(400).json({ msg: 'Token invalido' });

         } else if(token) {
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

            req.usuario = await Usuario.findById(decoded.id).select(
                "-password -confirmado -token -date -__v"
              );

            return next();
         }
          
        } catch (error) {
          console.log(error);
        }
};

const perfil = async(req, res) => {
    try {
        usuario = req.usuario;
        res.json(usuario)
        
    } catch (error) {
        res.json(error)
    }
    
}

module.exports = {
    usuarioSesion,
    perfil
}