const mainController = require("./main.controller");
const Vehiculos = require("../models/Vehiculos");

module.exports = {
    getAllVehiculos: mainController.getAll(Vehiculos),
    createVehiculos: mainController.create(Vehiculos),
    editVehiculos: mainController.editOne(Vehiculos),
    getOneVehiculos: mainController.getOne(Vehiculos),
    deleteVehiculos: mainController.deleteOne(Vehiculos),
};
