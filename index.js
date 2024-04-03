const express = require('express');
const app = express();
const filmsRoutes = require('./routes/films.routes')

app.set('view engine', 'pug');
app.set('views','./views');



// Templates
// http://localhost:3000/
app.get('/', function(req, res){
    res.render('home');
  });

app.use('/film', filmsRoutes);
  
app.post('/film/', function(req, res){
    res.render('film');
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})