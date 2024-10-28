 
let meunome = 'João Pedro Martins';
let carácteres = 0;
 
 
for (let i = 0; i < meunome.length; i++) {
   
    if (meunome[i] !== ' ') {
        quantidadeLetras++;
    }
}
 
console.log(`O seu nome completo possui ${carácteres} letras.`);
 