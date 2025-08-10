import * as repo from './repository/cursoRepository.js' 

import express from 'express';
const servidor = express();
servidor.use(express.json())



servidor.get('/curso', async (req, resp) => {
    let registros = await repo.listarCursos();
    resp.send(registros);
  })

servidor.post('/inserir', async (req, resp) => {
    let novoCurso= req.body;
    let id = await repo.inserirCurso(novoCurso);
    resp.send({novoId: id});
})

servidor.get('/musica', async (req,resp) => {
  let registros= await repo.listarMusicas();
  resp.send(registros);

})

servidor.post('/inserir/musica', async (req,resp) => {
  let novaMusica= req.body;
  let id = await repo.inserirMusica(novaMusica);
  resp.send({novoId: id})
})

servidor.get('/turma', async (req,resp) => {
  let registros = await repo.listarTurmas();
  resp.send(registros);
})

servidor.post('/inserir/turma', async (req,resp) => {
  let novaTurma = req.body;
  let id = await repo.inserirTurma(novaTurma);
  resp.send({novoId: id});
})

servidor.get('/futebol', async (req,resp) => {
  let registros = await repo.listarJogadores();

  resp.send(registros)
})

servidor.post('/inserir/futebol', async (req,resp) =>{
  let novoFutebol = req.body;
  let id = await repo.inserirJogador(novoFutebol);

  resp.send({novoId: id})
})

servidor.get('/hospital', async (req,resp) => {
  let registros = await repo.listaHospital();

  resp.send(registros)
})

servidor.post('/inserir/hospital', async (req,resp)=>{
  let novoHospital= req.body;
  let id = await repo.inserirHospital(novoHospital)

  resp.send({novoId: id})
})

servidor.get('/viagem', async (req,resp)=>{
  let registros = await repo.listarViagem();
  
  resp.send(registros)
})

servidor.post('/inserir/viagem', async (req,resp) => {
  let novaViaegm = req.body;
  let id = await repo.inserirViagem(novaViaegm)

  resp.send({novoId: id})
})

servidor.get('/mercado', async (req,resp) => {
  let resgitros = await repo.listarMercado();
  resp.send(resgitros);
})

servidor.post('/inserir/mercado', async (req,resp) =>{
  let novoMercado = req.body;
  let id = await repo.inserirMercado(novoMercado);

  resp.send({novoId:id})
})

servidor.get('/material', async (req,resp) => {
  let registros = await repo.listarMaterias();

  resp.send(registros)
})

servidor.post('/inserir/material', async (req,resp)=>{
  let novaMateria= req.body;
  let id = await repo.inserirMateria(novaMateria);

  resp.send({novoId: id})
})

servidor.get('/tenis', async (req,resp) => {
  let registros = await repo.listarTenis();
  resp.send(registros)
})

servidor.post('/inserir/tenis', async (req,resp) => {
  let novoTenis = req.body;
  let id = await repo.inserirTenis(novoTenis);

  resp.send({novoId:id})
})

servidor.get('/estados', async (req,resp) => {
  let resgitros= await repo.listarEstados();

  resp.send(resgitros)
})

servidor.post('/inserir/estado', async (req,resp) => {
  let novoEstado = req.body;
  let id = await repo.inserirEstado(novoEstado);
  resp.send({novoId:id})
})

servidor.listen(
    5001,
     () => console.log(`API subida com sucesso!`));
