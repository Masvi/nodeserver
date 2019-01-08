
//global é a keyword para criar variáveis globais no node
global.hoje = new Date();

//importa o modulo http
const http = require('http');
//cria o server 
const server = http.createServer((req, res) =>{
  
    const resp = []; // resposta para solicitacoes de url
    resp['/'] = '<h1>Home</h1>';
    resp['/contato'] = '<h1>Contato</h1>';
    resp['/formulario'] = '<h1>Formulario</h1>';
    resp['semUrl'] = '<h1>Sem resposta para essa url</h1>';
    
    
    /*se a url vier undefind, null, sem valor responde a opcao
    semUrl do array de respostas*/
    res.end(resp[req.url] || resp['semUrl']);
    
});

//disponibiliza o server
//porta e ip do servidor
server.listen(3001, 'localhost', () => {
    //funcao executada no momento que o server ficar disponível
    console.log('Servidor de pé em: http://localhost:3001');
    console.log('Para desligar o servidor: ctrl + c');
    console.log(global.hoje);
});



