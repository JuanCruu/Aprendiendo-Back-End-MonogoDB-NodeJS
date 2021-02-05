'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var port = 3900
mongoose.set('useFindAndModify', false); //desactiva configuracion por defecto que puede quedar deprecada
mongoose.Promise = global.Promise; //se utiliza para usar las promesas y que no halla problemas
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true }) // .connect(conexion,opciones)
    .then(() => {
        console.log('Se realizo la conexion con la base de datos');
        //Luego de que se haya conectado con mongoDB se Crea servidor y ponerme a escuchar peticiones  HTTP

        app.listen(port, () => {
            console.log('servidor corriendo en http://localhost:' + port)
        })
    });