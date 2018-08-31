const mongoose = require('mongoose');
const { Schema } = mongoose;

const casosSchema = new Schema ({
    codigoCaso : { type: String, required:true},
    nombreCaso: { type: String, required: true},
    resumen: {type: String, required:true},
    pericionario: {type: String, required: true}
});

module.exports = mongoose.model('Caso', casosSchema );