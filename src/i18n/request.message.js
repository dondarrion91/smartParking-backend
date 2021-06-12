const ERROR_MESSAGES = {
    SERVER: "Internal Server Error",
    NOT_FOUND: "Not found",
    AUTH: "Authentication Error",
    SESSION_EXPIRED_MISSING: "Expired Session or Missings Token",
    USER_NOT_FOUND: "User doesn't exists",
};

const SUCCESS_MESSAGES = {
    SUCCESS: "Registro creado con exito",
    EDITED: "Registro editado con exito",
    DELETED: "Registro borrado con exito",
};

module.exports = {
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
};
