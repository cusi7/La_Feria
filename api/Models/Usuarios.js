const mongoose = require ('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
        
    nombre: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {

    },
    mensajes: {

    },
    favoritos: {

    },
    carrito: {

    },
    ventas: {

    },
    compras: {

    },
    reputacion: {

    },
    tienda: {
        
    }

    
})