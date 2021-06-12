const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lugaresSchema = new Schema({
    estado: {
        type: String,
        required: true,
    },
    tarifa: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Lugares", lugaresSchema);
