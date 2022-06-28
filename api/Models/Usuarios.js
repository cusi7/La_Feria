const mongoose = require ('mongoose');
const { Schema } = mongoose;
const validacion = require('mongoose-validator');

const usuarioSchema = new Schema({
        
    nombre: {
        type: String,
        maxlength: 15,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: validacion({
            validator: 'isEmail',
            passIfEmpty: true,
            message: 'Ingresar un email válido',
          })
    },
    password: {
        type: String,
        minlength: 7,
        require: true
    },
    avatar: {
        type: String
    },
    mensajes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mensaje'
    }],
    favoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto'
    }],
    carrito: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto'
    }],
    ventas: {
        type: Array
    },
    compras: {
        type: Array
    },
    reputacion: {
        type: Array
    },
    tienda: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tienda'
    }],
    confirmado: {
        type: Boolean,
        default: false
    },
    token: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}) 

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;