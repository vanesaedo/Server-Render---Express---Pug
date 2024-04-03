const filmsController = require('../controllers/films.controller');
const router = require('express').Router();


router.get("/:title", filmsController.getFilm2);

//router.post("/:title", filmsController.getProduct);

//router.post("/", productsController.createProduct);

module.exports = router;