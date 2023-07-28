const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const booksProducts = [
  {name: 'La ladrona de libros'}
]

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.get('/', (req, res) => {
  const data = {
    title: 'Nuestro sitio de productos',
    message: 'Bienvenido a nuestro sitio generado',
  }
  res.render('index', data);
});

app.get("/productos", (req, res) => { 
  const data = {
    title: 'Nuestro sitio Web con EJS',
    message: 'Bienvenido a nuestro sitio generado a partir de un motor de plantillas.',
    products: 'computerProducts'
  }
  res.render('productos', data);
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
