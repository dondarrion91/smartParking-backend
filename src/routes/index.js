const UsuariosRouter = require("./usuarios.router");
const AuthController = require("./auth.router");

module.exports = function (app) {
    app.use("/api/v1", UsuariosRouter());
    app.use("/api/v1", AuthController());
};
