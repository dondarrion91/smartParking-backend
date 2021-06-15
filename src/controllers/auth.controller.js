const i18n = require("../i18n/request.message");
const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const user = await Usuarios.findOne({
            usuario: req.body.usuario,
        });

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id,
                    usuario: req.body.usuario,
                },
                process.env.TOKEN_SECRET,
                { expiresIn: "1800s" }
            );

            res.status(200)
                .cookie("token", token, {
                    maxAge: 86_400_000,
                    httpOnly: true,
                    sameSite: "None",
                    secure: true,
                })
                .json({
                    id: user._id,
                    usuario: user.usuario,
                    admin: user.admin,
                });
        } else {
            res.status(401).json({
                message: i18n.ERROR_MESSAGES.AUTH,
            });
        }
    } catch (error) {
        res.json({ message: i18n.ERROR_MESSAGES.USER_NOT_FOUND });
    }
};

const register = async (req, res) => {
    try {
        let user = await Usuarios.create(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);

        user.password = hash;

        await user.save();

        res.json({
            message: i18n.SUCCESS_MESSAGES.USER_REGISTERED,
        });
    } catch (error) {
        res.json({ message: i18n.ERROR_MESSAGES.USER_ALREADY_EXISTS });
    }
};

const testCookie = async (req, res) => {
    try {
        res.send(true);
    } catch (error) {
        res.send(false);
    }
};

module.exports = {
    login,
    register,
    testCookie,
};
