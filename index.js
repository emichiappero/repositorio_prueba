// 1) Requerimos/incluimos los paquetes necesarios
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// 1.1) Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));

// 2) Rutas
app.get("/prueba", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 3) Listen
app.listen(4000, function () {
  console.log("Servidor iniciado");
});
