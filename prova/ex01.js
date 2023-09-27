// Ao efetuar a compra de sua refeição no Ifood o sistema, 
// após confirmação do pagamento, envia seu pedido ao restaurante, 
// que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. 
// Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, 
// pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. 
// Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs(AM/PM), 
// sendo que o correto seria utilizar o formato de 24hs. 
// Sua missão: criar um algoritmo capaz de fazer essa conversão! 
// Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs(06:15:25PM) e retorne o equivalente (18:15:25).

// 1- receber na funcao a string das horas

// 2- verificar se é AM ou PM

// 3- se AM, mantem a informação EXCETO o "AM"
// 3.1 - retorna o resultado

// 4- se PM, seleciona os 02 primeiros elementos

// 5- soma esses dois primeiros números com 12

// 6- substitui os dois primeiros números por este resultado obtido com a soma

// 7- retorna a informação EXCETO o "PM"