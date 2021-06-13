const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuarios.controller");
const middlewares = require("../middleware/auth");

module.exports = function () {
    router.get(
        "/usuarios",
        middlewares.verifyToken,
        usuariosController.getAllUsers
    );
    router.get(
        "/usuarios/:id",
        middlewares.verifyToken,
        usuariosController.getOneUser
    );

    router.put(
        "/usuarios/:id",
        middlewares.verifyToken,
        usuariosController.editUser
    );

    router.delete(
        "/usuarios/:id",
        middlewares.verifyToken,
        usuariosController.deleteUser
    );

    return router;
};
