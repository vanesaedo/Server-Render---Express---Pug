const getFilm = require('../utils/fetchFilms')

const getFilm2 = async (req, res) => {
  try {
      const title = req.params.title;
      let film = await getFilm(title); //{} Lo que va a utilizar el fectch como parámetro
      res.status(200).json(film); // Respuesta de la API para 1 producto
  }
  catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res.status(400).json({msj:`ERROR: ${error.stack}`});
  }
}

//const getFilmByForm = async ()

module.exports = {
    getFilm2
};