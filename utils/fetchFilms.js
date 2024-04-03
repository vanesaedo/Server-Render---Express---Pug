const fetchFilm = async (title = "") => {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=b5fceb56`); //{} o [{},{},{},{}]
    let data = await response.json(); //{} o [{},{},{},{}]
    return data;
}
  //getFilm('superman').then(data=>console.log(data));




  module.exports = fetchFilm;