const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});

rl.question('Qual é o seu nome?', (nome) => {
    console.log ('Olá, ${nome}! Bem vindo aoa Node.js');
    rl.close();

});
