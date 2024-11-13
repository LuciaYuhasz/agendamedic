// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Asegúrate de importar 'path'
const app = express();

// Importar las rutas de médicos
const medicosRoutes = require('./routes/medicosRoutes');
const pacientesRoutes = require('./routes/pacientesRoutes');
const turnosRoutes = require('./routes/turnosRoutes');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))); // Añadir esta línea
app.use('/static', express.static('node_modules'));
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('sucursalCentro');
});

// Usar las rutas de médicos
app.use('/', medicosRoutes);
app.use('/', pacientesRoutes);
app.use('/', turnosRoutes);

//app.get('/sucursal-centro', (req, res) => {
//  res.render('sucursalCentro');
//});





console.log(`Puerto asignado: ${process.env.PORT}`);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App en puerto ${PORT}`);
});

/*app.listen(3000, () => {
    console.log("App en puerto 3000");
});
*/