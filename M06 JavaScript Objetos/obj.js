//hasOwnProperty significa que tiene su propiedad. recibiremos true o false.
//var tienePropiedad = libro.hasOwnProperty('autor');
//la consola responde true o false.

//Keys
//devolver un arreglo con otdas las propiedades de un objeto
//var todasLasPropiedades = Object.keys(libro);

//for in
//vas mundo = {continenees: 7, paises: 195, oceanos: 5};
// for ( var prop in mundo){
//     console.log("Esta es la propiedad: " + prop);
//     console.log("Este es el valor; "+ mundo[prop])
// }
//EL BUCLE FOR SOLO RECORRE ARREGLOS
//EL BUCLE FOR IN NOS SIRVE PARA RECORRER OBJETOS.

//objeto global llamado this, hace referencia a un contexto.
//vas mascota ={animaal: 'perro', raza: 'coker', 
//info: function() { 'mi perro es ' + this.raza}}

//mascota.info()