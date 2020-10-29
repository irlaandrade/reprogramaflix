const controller = require("../controller/seriesController");

const express = require("express");
const router = express.Router();

//@route GET Series
//@desc Return all series
//@acces Public
//@endpoint http://localhost:port/series/all
router.get("/all", controller.getAll);

//@route GET Series
//@desc Return series by id
//@acces Public
//@endpoint http://localhost:port/series/
// router.get("/:id", controller.getById); // Usando com o params. Se usar ele, daí coloca a rota por último (abaixo de todas as outras)
router.get("/", controller.getById); // Usando com o query params. Pode deixar onde está.

//@route GET Series
//@desc Return series by title
//@acces Public
//@endpoint http://localhost:port/series/title
router.get("/title", controller.getByTitle);

//@route GET Series
//@desc Return series by seasons
//@acces Public
//@endpoint http://localhost:port/series/seasons
router.get("/seasons", controller.getBySeasons);

//@route GET Series
//@desc Return series by genre
//@acces Public
//@endpoint http://localhost:port/series/genre
router.get("/genre", controller.getByGenre);

module.exports = router;