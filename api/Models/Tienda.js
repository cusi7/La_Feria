const mongoose = require ('mongoose');
const {Schema} = mongoose;

const tiendaSchema = new Schema({
    
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    descripcion: {
        type: String
    },
    logo: {
        type: String
    },
    banner: {
        type: String
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto' 
    }],
    opiniones: {
        type: Object
    },
    admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
});

const Tienda = mongoose.model('Tienda', tiendaSchema);
module.exports = Tienda;