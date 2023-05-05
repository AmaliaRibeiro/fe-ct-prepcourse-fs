//Entidades: represnetacion de conceptos del mundo real, ejemplo en insta: usuarios, publicaciones 
//Clases: plantilla o modelo de una entidad
//Clase Animal: 
//propiedades: ojos, color, habitat.
//Existen dos maneras de declarar clases: dos sintaxis: funcion constructora y expresion de clase.
//creamos la plantilla, primera letra del nombre de la clase siempre en mayus.(tienen propiedades y metodos)
//THIS me permite indicarle al codigo de que contexto debe obtener informacion.

// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//     this.informacion = function() {
//         console.log('Este es un ' + this.marca + ' de color ' + this.color)
//     }
//}
//utilizamos esta plantilla, para eso declararemos la siguiente variable.

// const miPrimerAuto = new Auto(2, 'rojo', 'ferrari', 2018, 4);
// console.log(miPrimerAuto);// de la instancia
// console.log(miPrimerAuto.marca); // con su propiedad.
// Podemos acceder a esta informacion: (Funcion constructora)
//miPrimerAuto.informacion();
//como agregar metodos a una clase.
//1.this.informacion // nos da informacion acerca de la instancia.

//Expresion de clase
// class Auto{
//     constructor(puertas, color, marca, año, ruedas) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     }
//         informacion() {
//             console.log('Este es un ' + this.marca + ' de color ' + this.color);
//         }
// }

// const miSegundoAuto = new Auto(4, 'blanco', 'peugeot', 2008, 4)
// miSegundoAuto.informacion();
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.color);

//Ejemplo de una clase con una propiedad y un metodo.

// class Football{
//     constructor(jugador) {
//         this.jugador = jugador
//     }
// obtenerNombre() {
//     console.log(this.jugador)
//  }
// }

// const argentina = new Football('Messi');
// const brasil = new Football('Pele')

//prototipo mecanismo por el cual todos los objetos o elementos de java pueden extender sus propiedades y metodos.
//en java existe un dato llamado array que proviene de un objeto global llamado array le extiende mediante su prototipo 
//propiedades y metodos al tipo de dato array.
//Herencia

// Array.prototype.mayorQueTres = function () {  //prototype indicamos que queremos ingresar al prototipo de objeto global array, especificar el nombre para este metodo pr ejemplo mayoresQueTres
//     var arregloModificado = [];
//     for (var i = 0; i < this.length; i++) {
//            if (this[ i ] > 3) {  //this equivale al arreglo que esta invocando nuestro metodo
//                   arregloModificado.push(false);
//            } else {
//                   arregloModificado.push(this[ i ]);
//            }
//     }
//     return arregloModificado;
//  };
  
//  var arreglo = [1, 2, 3, 4, 5]; //creamos un variable que contenga los numeros a este arreglo le aplicaremos el nuevo metodo que creamos(mayoresQueTres)
//  var nuevoArreglo = arreglo.mayorQueTres(); //guardamos el resultado en una variable llamada nuevoArreglo.
//  console.log(nuevoArreglo); //por ultimo console.log

//  class LatinoAmerica {
// 	constructor() {
// 		this.paises = [ ];
// 	};
// };
 
// LatinoAmerica.prototype.agregarPais = function (pais) {
//    	this.paises.push(pais);
// };
// let continente = new LatinoAmerica(); // se crea una variable continente que sera igual a una nueva instancia de latinoamerica
// continente.agregarPais('México', 'Argentina'); //vamos acceder al metodo agregarPais y le agregamos mexico
// console.log(continente.paises); // console log para ver.

//Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases. 

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }

 class Programador extends Persona {    //para extender la clase persona a programador necesitamos la palabra extends
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);  //para que estas propiedades sean heredadas necesitamos usar la palabra super, y tambien nos permite agregar el nuevo contexto en este caso programador.
       this.añosDeExperiencia = añosDeExperiencia; //como la propiedad añosDe.. No es heredada la necesitamos declarar dentro de esta clase con this.
    }
    codear() {  //agregamos el metodo codear
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martin', 26);
 let programador = new Programador('María', 37, 4);
//  martin.saludar();
//  programador.codear();

 programador.saludar(); //esto se debe a que todos los metodos recibidos de la clase persona fueron heredados por la clase programador.

 //extension de clase nos permite:
 //cuando necesitamos que algunas entidades esten relacionadas a nuestro codigo.
 //extender mas de una vez A CUALQUIER CLASE, incluso podemos extender una clase de otras clases ya extendidas.
 