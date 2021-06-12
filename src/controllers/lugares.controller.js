const mainController = require("./main.controller");
const Lugares = require("../models/Lugares");

module.exports = {
    getAllLugares: mainController.getAll(Lugares),
    createLugar: mainController.create(Lugares),
    editLugar: mainController.editOne(Lugares),
    getOneLugares: mainController.getOne(Lugares),
    deleteLugar: mainController.deleteOne(Lugares),
};
