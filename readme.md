#BACKEND

Estrutura do Projeto

/src (Diretório Raiz) Contém todo o código-fonte da aplicação, organizado em subdiretórios por responsabilidade.

/config Armazena todas as configurações da aplicação, incluindo conexões com bancos de dados (MySQL e MongoDB) e configurações do Express. Centraliza variáveis de ambiente e parâmetros do sistema.

/controllers Responsável por receber as requisições HTTP, processar os parâmetros, chamar os serviços apropriados e retornar as respostas. Funciona como intermediário entre as rotas e a lógica de negócio.

/middlewares Contém funções intermediárias executadas antes dos controladores, como autenticação, verificação de permissões, validação de dados e tratamento de erros global.

/models Define a estrutura dos dados e o mapeamento para o banco de dados. Cada arquivo representa uma entidade do sistema (usuários, salas, locações e eventos) com seus campos e relacionamentos.

/routes Especifica os endpoints da API, associando cada rota HTTP a um controlador e definindo os middlewares necessários para cada operação.

/services Implementa a lógica de negócio da aplicação, separada dos controladores. Contém regras de negócio, validações complexas e operações de banco de dados.

/utils Funções auxiliares e utilitárias reutilizáveis em diferentes partes da aplicação, como manipulação de senhas, validação de dados e operações com datas.

Arquivos Principais

app.js: Configura e inicializa a aplicação Express, carregando middlewares e rotas.

server.js: Ponto de entrada da aplicação que inicia o servidor HTTP e realiza conexões com bancos de dados.
