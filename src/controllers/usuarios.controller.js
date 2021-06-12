const mainController = require("./main.controller");
const Usuarios = require("../models/Usuarios");

module.exports = {
    getAllUsers: mainController.getAll(Usuarios),
    getOneUser: mainController.getOne(Usuarios),
    createUser: mainController.create(Usuarios),
    editUser: mainController.editOne(Usuarios),
    deleteUser: mainController.deleteOne(Usuarios),
};
