let numerosantigos = [4, 5, 6];
let numerosnovos = [1, 2, 3];
 
 
numerosnovos.forEach(function(numero) {
    numerosantigos.unshift(numero);
});
 
 
console.log(numerosantigos);