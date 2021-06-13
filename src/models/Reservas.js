const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservasSchema = new Schema({
    lugar: {
        type: Schema.ObjectId,
        ref: "Lugares",
    },
    horaIngreso: {
        type: Date,
        required: true,
    },
    horaSalida: {
        type: Date,
        required: true,
    },
    cliente: {
        type: Schema.ObjectId,
        ref: "Usuarios",
    },
    montoReserva: {
        type: Number,
        required: true,
    },
    montoFinal: {
        type: Number,
        required: true,
    },
    metodoDePago: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Reservas", reservasSchema);
