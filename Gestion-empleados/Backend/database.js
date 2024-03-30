//***Requerir un modulo que se conecte a mongodb, por eso necesitamos mongoose }
//*debemos decirle a express que se conecte a mongodb por lo que necesitamos un modulo y tambien
//sirva para modelar datos*/

const mongoose = require('mongoose'); //se requiere el modulo y se guarda en la constante

const URI = 'mongodb://localhost/empleados'; // defino la direccion de la conexion de la base de datos en una const
 
mongoose.connect(URI)
     .then(db => console.log('DB is connected')) //se utiliza una prometa para obtener informacion
     .catch(err => console.error(err)); 
     
module.exports = mongoose; //de esta manera la constante me devuelve la conexion np