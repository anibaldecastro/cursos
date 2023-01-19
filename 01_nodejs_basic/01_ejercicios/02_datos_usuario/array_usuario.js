//EJERCICIO 02. CURSO JS BÁSICO OPENBOOTCAMP

/*
Declarar las variables Fecha de nacimiento y Fecha de publicación 
para poder llamarlas desde dentro del array
*/

var fechaDeNacimiento = new Date("december 29 1979");
var fechaDePublicacion = new Date("december 23 2008");

/*
Creación de la constante usuario con mis parámetros
*/

const usuario = {
    nombre: "Aníbal",
    edad: 43,
    developer: false,
    fechaDeNacimiento: fechaDeNacimiento,
    libroFavorito: {
        titulo:"La hermandad de la uva",
        autor: "John Fante",
        fechaDePublicacion: fechaDePublicacion,
        url:"https://www.anagrama-ed.es/",
    }
};

/*
Llamada a la consola para comprobar que recibimos la información correctamente
*/

console.log(usuario)