const ERROR_MESSAGES = {
    SERVER: "Internal Server Error",
    NOT_FOUND: "Not found",
    AUTH: "Authentication Error",
    SESSION_EXPIRED_MISSING: "Expired Session or Missings Token",
    USER_NOT_FOUND: "El usuario no existe",
    USER_ALREADY_EXISTS: "El usuario ya existe",
};

const SUCCESS_MESSAGES = {
    SUCCESS: "Registro creado con exito",
    EDITED: "Registro editado con exito",
    DELETED: "Registro borrado con exito",
    USER_REGISTERED: "Usuario registrado con exito",
};

module.exports = {
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
};
