const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// cors
const cors = require("cors");

const MONGO_URL =
    process.env.NODE_ENV === "development"
        ? process.env.DEV_URL
        : process.env.PRO_URL;

//conectar Mongo
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// crear el servidor
const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Hab cors
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);

//rutas
routes(app);

// carpeta publica
app.use(express.static("uploads"));

// puerto
app.listen(process.env.PORT || 3000);
