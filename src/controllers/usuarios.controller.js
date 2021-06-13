const mainController = require("./main.controller");
const Usuarios = require("../models/Usuarios");

const getAllUsers = (model) => async (req, res) => {
    try {
        const records = await model.find().populate({
            path: "reservas.reserva",
            model: "Reservas",
        });

        res.json(records);
    } catch (error) {
        console.log(error);
        res.json({
            message: i18n.ERROR_MESSAGES.SERVER,
        });
    }
};

const getOneUser = (model) => async (req, res) => {
    try {
        const record = await model
            .findOne({
                _id: req.params.id,
            })
            .populate({
                path: "reservas.reserva",
                model: "Reservas",
            });

        res.json(record);
    } catch (error) {
        res.json({
            message: i18n.ERROR_MESSAGES.NOT_FOUND,
        });
    }
};

module.exports = {
    getAllUsers: getAllUsers(Usuarios),
    getOneUser: getOneUser(Usuarios),
    deleteUser: mainController.deleteOne(Usuarios),
    editUser: mainController.editOne(Usuarios),
};
