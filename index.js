const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");

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

// Hab cors
app.use(cors());

//rutas
routes(app);

// carpeta publica
app.use(express.static("uploads"));

// puerto
app.listen(3000);
