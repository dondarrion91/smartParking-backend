const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const middlewares = require("../middleware/auth");

module.exports = function () {
    router.post("/login", authController.login);
    router.post("/register", authController.register);
    router.get(
        "/test-cookie",
        middlewares.verifyToken,
        authController.testCookie
    );

    return router;
};
