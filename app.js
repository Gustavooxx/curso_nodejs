import express from 'express';

const servidor = express();

servidor.get('/helloworld', (req,resp) =>{
    // codigo do edpoint
    resp.send('Hello World!!');
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Ola seja bem vindo e bem vinda!!');
})

servidor.get('/v2/mensagem/boasvindas', (req,resp) => {
    resp.send('Que bom que você está aqui!! s2');
})

servidor.get('/mensagem/ocupado', (req,resp) => {
    resp.send('estou ocupado, tente novamente mais tarde!!');   
})

servidor.get('/mensagem/ocupado/recado', (req,resp) => {
    resp.send('deixe uma mensagem e eu te respondo mais tarde!!');
})

servidor.get('/calculadora/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 =  Number(req.params.n2);
    let resultado = n1 * n2;
    resp.send(`O resultado da soma é ${resultado}`);
})

servidor.listen(
    50,
     () => console.log(`API subida com sucesso!`));