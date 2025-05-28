//Chamada das dependencias
const express = require('express');
const { createServer } = require('http');

//inicializar aplicação Express
const app = express();
const server = createServer(app);

//Inicializar conexões
const inicializar = async () => {
    try {
        //Escutar o servidor na porta 3000
        const PORT = process.env.PORT;
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch {
        console.log('Erro ao inicializar o servidor:',error);
        process.exit(1);
    }
};

//executando a função inicializar()
inicializar();

// exportando os módulos do app e do servidor
module.exports = { app, server };
