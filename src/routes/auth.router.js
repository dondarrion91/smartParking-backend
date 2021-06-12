const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

module.exports = function () {
    router.post("/login", authController.login);
    router.post("/register", authController.register);

    return router;
};
