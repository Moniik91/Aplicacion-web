/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo empleado
*/

const Empleado = require('../models/empleado');

const empleadoCtrl = {};

/**
* DEFINO LOS MÉTODOS */

//Obtener todos los empleados

empleadoCtrl.getEmpleados = async (req, res) => {

    const empleados = await Empleado.find();
    res.json(empleados);
}

// Crear empleados

empleadoCtrl.createEmpleados = async (req, res) => {

    const empleado = new Empleado(req.body);
    await empleado.save();                      // aplicamos await, porque se sabe que va demorar un poco el proceso
    //console.log(empleado);                    // de guardar los datos 
    
    res.json({
    'status': 'Empleado guardado'
});
   //console.log(req.body);
   //res.json('recibido');
}

//Conseguir un único empleado

empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    //console.log(req.params.id);
const empleadoUnico = await Empleado.findById(req.params.id); // es un metodo que toma algo de tiempo por eso await

res.json(empleadoUnico);

}

//Actualizar empleado

empleadoCtrl.editarEmpleado = async (req, res) => {

    const { id } = req.params; // otra forma de escribir que quiero capturar el id del usuario o empleado que quiero actualizar
    const empleadoEdit = { // Pasamos los datos traidos del cliente
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
};
    await Empleado.findByIdAndUpdate(id, {$set: empleadoEdit}, {new: true}); // Se utiliza el metodo set para modificar los datos 
    res.json({status: 'Empleado Actualizado'});

}

// Eliminar empleado

empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado Eliminado'});

}

//exporto el módulo
module.exports = empleadoCtrl;