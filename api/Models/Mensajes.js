const mongoose = require ('mongoose');
const {Schema} = mongoose;

const mensajeSchema = new Schema ({
    
    de: {
        type: mongoose.Schema.Types.String,
        ref: 'Usuario'
    },
    para: {
        type: mongoose.Schema.Types.String,
        ref: 'Usuario'
    },
    mensaje: {
        type: String
    },
    imagen: {
        type: String
    },
    visto: {
        type: Boolean,
        default: false
    }
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);
module.exports = Mensaje;