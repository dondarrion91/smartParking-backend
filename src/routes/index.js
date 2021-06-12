const UsuariosRouter = require("./usuarios.router");
const AuthRouter = require("./auth.router");
const lugaresRouter = require("./lugares.router");
const reservasRouter = require("./reserva.router");

module.exports = function (app) {
    app.use("/api/v1", UsuariosRouter());
    app.use("/api/v1", AuthRouter());
    app.use("/api/v1", lugaresRouter());
    app.use("/api/v1", reservasRouter());
};
