const UsuariosRouter = require("./usuarios.router");
const AuthController = require("./auth.router");
const lugaresController = require("./lugares.router");

module.exports = function (app) {
    app.use("/api/v1", UsuariosRouter());
    app.use("/api/v1", AuthController());
    app.use("/api/v1", lugaresController());
};
