const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola, Mundo');
});

app.get('/estudiantes', (req, res) => {
    res.send('<html><body><p>Lista de estudiantes.</p></body></html>');
});

app.get('/estudiante', (req, res) => {
    res.send('<html><body><p>Usuario pedido</p></body></html>');
});

app.use((req, res) => {
    if (req.url === '/404') {
        res.status(404).send('Error 404: Pagina no encontrada');
    } else {
        res.status(500).send('Error desconocido: Algo salio mal en el servidor');
    }
});

app.get('*', (req, res) => {
    res.status(404).send('Lo siento esta no es una ruta de mi proyecto! Ruta con Use');
});

app.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));
