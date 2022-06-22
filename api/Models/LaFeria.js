const mongoose = require ('mongoose');
const {Schema} = mongoose;

const laFeriaSchema = new Schema ({


});

const laFeria = mongoose.model('laFeria', laFeriaSchema);
module.exports = laFeria;