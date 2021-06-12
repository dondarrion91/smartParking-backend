const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    reservas: [
        {
            reserva: {
                type: Schema.ObjectId,
                ref: "Reservas",
            },
        },
    ],
    nombreCompleto: {
        type: String,
    },
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        require: true,
        unique: true,
    },
    admin: {
        type: Boolean,
        require: true,
    },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
