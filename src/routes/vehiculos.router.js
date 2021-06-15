const express = require("express");
const router = express.Router();

const vehiculosController = require("../controllers/vehiculos.controller");
const middlewares = require("../middleware/auth");

module.exports = function () {
    router.get("/vehiculos", vehiculosController.getAllVehiculos);
    router.post("/vehiculos", vehiculosController.createVehiculos);
    router.put(
        "/vehiculos/:id",
        middlewares.verifyToken,
        vehiculosController.editVehiculos
    );
    router.get(
        "/vehiculos/:id",
        middlewares.verifyToken,
        vehiculosController.getOneVehiculos
    );
    router.delete(
        "/vehiculos/:id",
        middlewares.verifyToken,
        vehiculosController.deleteVehiculos
    );

    return router;
};
