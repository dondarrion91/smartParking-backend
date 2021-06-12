const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// cors
const cors = require("cors");

//conectar Mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapi", {
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
app.listen(3000);
