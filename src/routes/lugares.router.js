const express = require("express");
const router = express.Router();

const lugaresController = require("../controllers/lugares.controller");
const middlewares = require("../middleware/auth");

module.exports = function () {
    router.get(
        "/lugares",
        middlewares.verifyToken,
        lugaresController.getAllLugares
    );
    router.post(
        "/lugares",
        middlewares.verifyToken,
        lugaresController.createLugar
    );
    router.put(
        "/lugares/:id",
        middlewares.verifyToken,
        lugaresController.editLugar
    );
    router.get(
        "/lugares/:id",
        middlewares.verifyToken,
        lugaresController.getOneLugares
    );
    router.delete(
        "/lugares/:id",
        middlewares.verifyToken,
        lugaresController.deleteLugar
    );

    return router;
};
