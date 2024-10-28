let numeros = [2, 5, 8, 13, 16, 21];
let novosN= [];
 
numeros.forEach(function(numerosM){
    if (numerosM % 2 === 0) { 
        let multiplicação= Math.floor(Math.random() * 10) +1; 
        novosN.push(numerosM * multiplicação);
    } else {
        novosN.push(numerosM);
    }
  
});
 
  console.log(novosN);
