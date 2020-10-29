const express = require("express");
const app = express();

const films = require("./routes/filmsRoutes"); //chamando a rota raiz
const series = require("./routes/seriesRoutes"); // chamando a rota raiz

app.use("/films", films); // usando a rota raiz
app.use("/series", series); // usando a rota raiz


module.exports = app; // exportando o app