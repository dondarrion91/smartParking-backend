const jwt = require("jsonwebtoken");
const i18n = require("../i18n/request.message");

const verifyToken = (req, res, next) => {
    try {
        jwt.verify(
            req.cookies.token,
            process.env.TOKEN_SECRET,
            function (err, decoded) {
                if (decoded) {
                    next();
                } else {
                    console.log(err);
                    res.status(501).json({
                        message: i18n.ERROR_MESSAGES.AUTH,
                    });
                }
            }
        );
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: i18n.ERROR_MESSAGES.AUTH,
        });
    }
};

module.exports = { verifyToken };
