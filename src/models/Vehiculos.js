const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehiculosSchema = new Schema({
    patente: {
        type: String,
        required: true,
        unique: true,
    },
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Vehiculos", vehiculosSchema);
