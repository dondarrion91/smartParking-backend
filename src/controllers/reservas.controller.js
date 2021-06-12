const mainController = require("./main.controller");
const Reservas = require("../models/Reservas");

const getAll = (model) => async (req, res) => {
    try {
        const records = await model
            .find()
            .populate("lugar")
            .populate("cliente");

        res.json(records);
    } catch (error) {
        console.log(error);
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

module.exports = {
    getAllReservas: getAll(Reservas),
    createReserva: mainController.create(Reservas),
    editReserva: mainController.editOne(Reservas),
    getOneReservas: mainController.getOne(Reservas),
    deleteReserva: mainController.deleteOne(Reservas),
};
