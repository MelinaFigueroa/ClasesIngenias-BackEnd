const paises = ['Argentina','Uruguay','Brasil','Venezuela','Paraguay','Bolivia'];
const nombre = "Donna clacrk";

function listarPaises (array){
    console.log('Listado de paises contenidos en el array');
    console.table(array);
}

function cambiarNombre(){
    nombre = ('Ingresa aquí tu nombre de pila o completo');
    try{
         tuNombre;
    }
    catch(err){
        console.error("Se ha producido un error al intentar cambiarel valor de una constante", err);
    }
    finally{
        console.log('El nombre de la constante tu nombre')
    }
};
listarPaises(paises);
cambiarNombre();