const controller = require("../controller/filmsController");

const express = require("express");
const router = express.Router();

//@route GET Films
//@desc Return all films
//@acces Public
//@endpoint http://localhost:port/films/all
router.get("/all", controller.getAll);

//@route GET Films
//@desc Return a film by title
//@acces Public
//@endpoint http://localhost:port/films/title
router.get("/title", controller.getByTitle);

//@route GET Films
//@desc Return a film by year
//@acces Public
//@endpoint http://localhost:port/films/year
router.get("/year", controller.getByYear);

//@route GET Films
//@desc Return a film by genre
//@acces Public
//@endpoint http://localhost:port/films/genre
router.get("/genre", controller.getByGenre);

//@route GET Films
//@desc Return a film by language
//@acces Public
//@endpoint http://localhost:port/films/language
router.get("/language", controller.getByLanguage);

//@route GET Films
//@desc Return a film by id
//@params :id
//@acces Public
//@endpoint http://localhost:port/films/:id
router.get("/:id", controller.getById);

module.exports = router