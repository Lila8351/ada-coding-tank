// Desafio: Número Solitário
// Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), 
// a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:

// [12, 17, 15, 19, 22, 17, 19, 12]
// E retorne os que não estiverem repetidos.

// Para resolução, vou considerar os números repetidos como dezenas, e não em unidades, 
// senão todos serão repetidos, menos o 5.
// ou seja, para minha resolução, espero como resposta um array que me devolva "15" e "22";

// 1- primeiro vou transformar num array de string

// 2- depois vou procurar usando o metodo find() e o for loop 

// 2.1.0- outra opção seria usar o filter e ver se retorna mais de 1 elemento.

// 2.1.1- se o tamanho da array que volta do filter for igual a 1 (blablabla.length === 1), adiciona isso na array de
//numeros solitarios 

// ou eu desisto de tudo e tento fazer so com loop.

const array = [12, 17, 15, 19, 22, 17, 19, 12];

function aloneNumber(){

    for (i=0; i<array.length; i++){
        //aqui ele vai procurar o primeiro elemento ao longo da array toda
    
    }
}