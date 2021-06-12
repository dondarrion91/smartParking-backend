const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuarios.controller");

module.exports = function () {
    router.get("/usuarios", usuariosController.getAllUsers);
    router.get("/usuarios/:id", usuariosController.getOneUser);
    router.post("/usuarios", usuariosController.createUser);
    router.put("/usuarios/:id", usuariosController.editUser);
    router.delete("/usuarios/:id", usuariosController.deleteUser);

    return router;
};
