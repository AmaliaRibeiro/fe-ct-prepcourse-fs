function devuelvoUsuario() {
   return 'CAMILO';
}
function devuelvoSaludo() {
   return 'Hola';
}
function saludar(cb1, cb2) {
   return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

// const newArray = []
   //    arrayOfStrings.filter(elemento => {
   //    if (elemento[0] === "a") {
   //    newArray.push(elemento)
   //    }
   // })
   // return newArray
