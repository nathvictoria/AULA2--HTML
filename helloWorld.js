const readline = require ('readline'); // importou um componente do nodejs

const rl = readline.createInterface({ //declarei a variável; chamei o componente e inicei a função
    input: process.stdin, 
    output: process.stdout
    
}); 

rl.question('Qual é o seu nome?', (nome) => { //vai ler a informação e guardar
    console.log (`Olá, ${nome}! Bem vindo ao Node.js`); //vai apenas mostrar a informação; (utiliza-se crase em vez de aspas)
    rl.close();// fechou a função que chamei lá em cima

});
