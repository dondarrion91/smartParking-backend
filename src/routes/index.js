const UsuariosRouter = require("./usuarios.router");

module.exports = function (app) {
    app.use("/api/v1", UsuariosRouter());
};
