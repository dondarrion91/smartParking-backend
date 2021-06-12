const i18n = require("../i18n/request.message");
const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        console.log(req.body);
        const user = await Usuarios.findOne({
            usuario: req.body.usuario,
        });

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    usuario: req.body.usuario,
                },
                process.env.TOKEN_SECRET,
                { expiresIn: "1800s" }
            );

            res.status(200)
                .cookie("token", token, {
                    maxAge: 86_400_000,
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                })
                .json({ token: token });
        } else {
            res.status(401).json({
                message: i18n.ERROR_MESSAGES.AUTH,
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ message: i18n.ERROR_MESSAGES.USER_NOT_FOUND });
    }
};

const register = async (req, res) => {
    try {
        const users = await Usuarios.find();

        if (users.length === 0) {
            req.body.admin = true;
        } else {
            req.body.admin = false;
        }

        let user = await Usuarios.create(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);

        user.password = hash;

        await user.save();

        res.json({
            message: i18n.SUCCESS_MESSAGES.USER_REGISTERED,
        });
    } catch (error) {
        console.log(error);
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
