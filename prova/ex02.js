// Desafio: Quantidade de Palavras
// Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:

// "façaMercadoNoIfoodEntregamosTudOQueVocêPrecisaNaPortaDaSuaCasa"
// Como você pode perceber, essa frase está no padrão camelCase, 
// portanto cada nova palavra é representada pela inicial em maiúscula. 
// Crie uma função que receba uma string e retorne a quantidade de palavras existentes!

// Quantidade de palavras = quantidade de letras maiúsculas + 1. 

const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const regex = /[A-Z]/g;
const arrayLetrasMaiusculas = frase.match(regex); 
const quantidadePalavras = arrayLetrasMaiusculas.length + 1;
console.log(quantidadePalavras);
console.log(arrayLetrasMaiusculas);