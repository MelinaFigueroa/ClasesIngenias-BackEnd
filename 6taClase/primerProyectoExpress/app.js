const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const navbar = `
<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/estudiantes">Listado de estudiantes</a></li>
        <li><a href="/formulario">Formulario de registro</a></li>
    </ul>
</nav>
`;
const html = (titulo, contenido) => `
<html>
    <head>
        <title>${titulo}</title>
    </head>
    <body>
        <header>
            ${navbar}
        </header>
        <p>${contenido}</p>
        <footer>
        Ingenias
        </footer>
    </body>
</html>
`;

const estudiantes = [
    { nombre: 'Juan', apellido: 'Pérez', mail: 'ejemplo@gmail.com' },
    { nombre: 'María', apellido: 'Gómez', mail: 'ejemplo@gmail.com' },
    { nombre: 'Carlos', apellido: 'López', mail: 'ejemplo@gmail.com' },
];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const titulo = 'Página de Inicio';
    const contenido = 'Te damos la bienvenida al inicio.';
    res.send(html(titulo, contenido));
});

app.get('/estudiantes', (req, res) => {
    const titulo = 'Lista de Estudiantes';
    const tablaEstudiantes = estudiantes.map(estudiante => `
        <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.apellido}</td>
            <td>${estudiante.mail}</td>
        </tr>`).join('');

    const contenido = `
    <h2>${titulo}</h2>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            ${tablaEstudiantes}
        </tbody>
    </table>`;
    res.send(html(titulo, contenido));
});

app.get('/formulario', (req, res) => {
    const titulo = 'Aquí puede registrarse';
    const contenido = `
    <form action="/registro" method="post">
        <label>Nombre<input type="text" name="nombre" /></label>
        <label>Apellido<input type="text" name="apellido" /></label>
        <label>Correo Electronico<input type="email" name="mail" /></label>
        <input type="submit" value="Enviar" name="enviar" />
    </form>`;
    res.send(html(titulo, contenido));
});

app.post('/registro', (req, res) => {
    const { nombre, apellido, mail } = req.body;

    const mensajeRegistro = `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Mail: ${mail}
    `;
    fs.appendFile('datos.txt', mensajeRegistro + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            res.send('Error al registrar los datos. Por favor, inténtalo nuevamente.');
        } else {
            console.log('Datos registrados con éxito');
            const titulo = 'Registro Exitoso';
            const contenido = `
                <p>¡Gracias por registrarte!</p>
                <p>Nombre: ${nombre}</p>
                <p>Apellido: ${apellido}</p>
                <p>Mail: ${mail}</p>
            `;
            res.send(html(titulo, contenido));
        }
    });
});

app.use((req, res)=>{
    res.status(404).json({error:'404', texto:'Ruta no encontrada'});
})

app.listen(PORT, () => console.log(`Node.js web server at port ${PORT} is running..`));
