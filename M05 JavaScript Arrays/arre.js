// Lista de compras
//const listaDeCompras = ['ami', 'maria', 'fernando'].length;

//console.log(listaDeCompras)

//push agrega un elemento al final
//unshift agrega elemento al principio
//pop elimina el ultimo elemento
//shift elimina el primer elemento

//const palabra ='Amalie';
//const palabraSeparada = palabra.split('');
//palabraSeparada.pop();
//palabraSeparada.push('a')
//console.log(palabraSeparada)
//const palabraArreglada = palabraSeparada.join('')
//console.log(palabraArreglada);

//Convierte un string en un arreglo con split
//convierte un arreglo en un string con join 

//const numeros = [0,2,3,4];
//numeros.forEach((num) => console.log(num));
//numeros.forEach((num) => {if (num === 2) {
  //  console.log(num)
//}})

//forEach podemos recorrer elemento por elemento, realiza una accion por cada elemento que indiquemos por ejemplo de comprobacion, 
//pero no hace cambios

//const masUno = numeros.map((num) => {
  //  return (num + 3)
//})
//console.log(masUno)

//si quisieramos realizar un cambio por cada elemento del arreglo podemos usar map, 
//por ejemplo para sumar y devuelve elementos modificados.
//tambien existen metodos includes, determina si un arreglo contiene un elemento especifico, devuelve true o false
//el metodo every determina si todos los elementos satisfacen una misma condicion.

//BUCLES
//var arr = [1,2,3,4,7];
//for(var i = 2; i < 6; i++) {
  //  console.log(arr[i]);
//}
///////////////
function encontrarLaLetraP(string) {
    const letras = string.split('');

    for (let i = 0; i< letras.length; i++) {
        if (letras[i] === 'p') {
            console.log('Si contiene p');
        } 
    }
}
encontrarLaLetraP('araiso')