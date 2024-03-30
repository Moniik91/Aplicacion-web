const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); //la constante app tendrá ahora todo el funcionamiento del servidor

const { mongoose } = require('./database');  //no se requiere todo el archivo sino la conexión

//***Se crea una REST API, es la manera de decirle al servidor que reciba y envíe datos */
//Configuraciones

app.set('port', process.env.PORT || 3000); // el set es para crear una variable que va a ser accedida desde
        //(nombre var, valor)
        // process es porque cuando se despliegue la app no voy a tener la opcion de 
        // utiliza el servicio que te de la nube en el caso que no exista utilizar el puerto 

//middlewares se encarga de  tener unas funciones encargadas de procesar los datos, cuando pidamos datos
//al servidor, de alguna manera el servidor debe entender los datos y es por eso que se necesita algun 

app.use(morgan('dev')); // queremos ver los datos en consola, cada vez que llegue una peticion pasa
// necesitamos confirmar el servidor para que entienda formato JSON, la razon es que angular tome 
//ENVIAR FORMATO JSON por lo que es importante que el servidor tambien este preparado para entender ese 
// vamos a utilizar un middleware. express.json

app.use(express.json()); //***método que ayuda a convertir el código para que el servidor 
//pueda entender lo que viene del cliente */

app.use(cors({origin: 'http://localhost:4200'})); //método para comunicar con el cliente
// rutas de nuestro servidor
app.use('/api/empleados',require('./routes/empleado.route'));


//iniciando el servidor
app.listen(app.get('port'), () => {//esta es una mejor manera de configurar el puerto
    console.log('server activo en el puerto', app.get('port'));
});
