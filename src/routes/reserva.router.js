const express = require("express");
const router = express.Router();

const reservaController = require("../controllers/reservas.controller");
const middlewares = require("../middleware/auth");

module.exports = function () {
    router.get(
        "/reservas",
        middlewares.verifyToken,
        reservaController.getAllReservas
    );
    router.post(
        "/reservas",
        middlewares.verifyToken,
        reservaController.createReserva
    );
    router.put(
        "/reservas/:id",
        middlewares.verifyToken,
        reservaController.editReserva
    );
    router.get(
        "/reservas/:id",
        middlewares.verifyToken,
        reservaController.getOneReservas
    );
    router.delete(
        "/reservas/:id",
        middlewares.verifyToken,
        reservaController.deleteReserva
    );

    return router;
};
