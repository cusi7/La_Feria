const mongoose = require ('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({

    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String
    },
    categorias: {
        type: Array
    },
    precio: {
        type: Number
    },
    imagenes: {
        type: String
    },
    stock: {
        type: Number
    },
    opiniones: {
        type: Object
    }

});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;