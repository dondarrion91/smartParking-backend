const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nombreCompleto: {
        type: String,
    },
    usuario: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
