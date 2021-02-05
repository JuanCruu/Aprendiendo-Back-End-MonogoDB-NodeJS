'use strict'

//Crear modulos de node para crear servidor

let express = require('express')
let bodyparser = require('body-parser')

//Ejecutar Express(http) 
let app = express();
//Cargar ficheros  rutas

//MiddelWares 
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
//CORS

//Añadir prefijos a las rutas

//ruta o metodo de prueba para el API REST
app.get('/probando', (req, res) => {
        return res.status(200).send({
                curso: 'Master en frameworks js',
                autor: 'el victor',
                alumno: 'juanCru'
            }

        )
    })
    //Exportar modulos (ficheros actual)
module.exports = app;