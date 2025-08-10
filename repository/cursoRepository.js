import { connection, connection2 } from "./connection.js";

export async function listarCursos() {
  const comando = `
    SELECT *
      FROM jogos_video_game
  `

  const [registros] = await connection.query(comando)
  return registros;
}

export async function inserirCurso(novoCurso){
  const comando = `
  INSERT INTO jogos_video_game(
  titulo,
  genero ,
  plataforma,
  data_lancamento,
  preco,
  classificacao_etaria,
  desenvolvedora 
 )values(?, ?, ? , ? , ? , ? , ?);
  `
  const [info] = await connection.query(comando, [
    novoCurso.titulo,
    novoCurso.genero,
    novoCurso.plataforma,
    novoCurso.data_lancamento,
    novoCurso.preco,
    novoCurso.classificacao_etaria,
    novoCurso.desenvolvedora,
  ])
  return info.insertId;

}

export async function listarMusicas(){
  const comando = `
  select * from tb_musica
  `
  const [registros] = await connection2.query(comando)
  return registros;
}

export async function inserirMusica(novaMusica){
  const comando = `
  INSERT INTO tb_musica(
  nm_musica,
  ds_musica ,
 url_artista,
  dt_lancamento,
  qtd_visualizacao,
  bt_destaque,
  ds_idioma 
 )values(?, ?, ? , ? , ? , ? , ?);
  `
  const [info] = await connection2.query(comando, [
    novaMusica.nm_musica,
    novaMusica.ds_musica ,
    novaMusica.url_artista,
    novaMusica.dt_lancamento,
    novaMusica.qtd_visualizacao,
    novaMusica.bt_destaque,
    novaMusica.ds_idioma 
  ])
  return info.insertId;

}

export async function listarTurmas(){
  const comando = `
  select * from tb_turma
  `
  const [registros] = await connection.query(comando)
  return registros;
  }

  export async function inserirTurma(novaTurma) {
      const comando = `
      INSERT INTO tb_turma (nm_turma,
      ds_turma,
      nr_ano_letivo,
      qtd_capacidade,
      bt_ativo,
      dt_incluso
      ) VALUES (?, ?, ?, ?, ?, ?);
       `
    const [info] = await connection.query(comando, [
      novaTurma.nm_turma,
      novaTurma.ds_turma,
      novaTurma.nr_ano_letivo,
      novaTurma.qtd_capacidade,
      novaTurma.bt_ativo,
      novaTurma.dt_incluso
      ])
      return info.insertId;
  }

  export async function listarJogadores() {
    const comando = `
    SELECT * FROM tb_futebol
    `
    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirJogador(novoFutebol) {
    const comando = `
      INSERT INTO tb_futebol(
      nm_jogador,
      ds_time	,
      vl_preco,
      id_idade,
      dt_aposentado,
      dt_nascimento
      ) VALUES (?,?,?,?,?,?);
    `

    const [info] = await connection.query(comando, [
      novoFutebol.nm_jogador,
      novoFutebol.ds_time	,
      novoFutebol.vl_preco,
      novoFutebol.id_idade,
      novoFutebol.dt_aposentado,
      novoFutebol.dt_nascimento
    ])
    return info.insertId;
  }

  export async function listaHospital () {
    const comando = `
      select * from tb_hospital
    `

    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirHospital(novoHospital) {
    const comando = `
    insert into tb_hospital(
    nm_medico,
    nm_paciente,
    ds_idade,
    ds_motivo,
    dt_consulta,
    cpf_paciente,
    cep_paciente,
    ds_alergia,
    vl_consulta,
    ds_farmacia,
    bt_planoDeSaude
    )values(?,?,?,?,?,?,?,?,?,?,?)
    `
    const [info] = await connection.query(comando, [
      novoHospital.nm_medico,
      novoHospital.nm_paciente,
      novoHospital.ds_idade,
      novoHospital.ds_motivo,
      novoHospital.dt_consulta,
      novoHospital.cpf_paciente,
      novoHospital.cep_paciente,
      novoHospital.ds_alergia,
      novoHospital.vl_consulta,
      novoHospital.ds_farmacia,
      novoHospital.bt_planoDeSaude
      
    ])
    return info.insertId;
  }

  export async function listarViagem(){
    const comando = `
    select * from tb_vi
    `
    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirViagem(novaViaegm) {
    const comando = `
    insert into tb_vi(
    nm_país,
    dt_data, 
    di_dias,	
    vl_valor,
    ht_hotel,
    qtd_pessoas,
    vl_precoTotal,	
    bt_bom
    )values(?,?,?,?,?,?,?,?)
    `
    const [info] = await connection.query(comando, [
      novaViaegm.nm_país,
      novaViaegm.dt_data, 
      novaViaegm.di_dias,	
      novaViaegm.vl_valor,
      novaViaegm.ht_hotel,
      novaViaegm.qtd_pessoas,
      novaViaegm.vl_precoTotal,	
      novaViaegm.bt_bom
    ])
    return info.insertId;
  }

  export async function listarMercado() {
    const comando = `
      select * from tb_merc
    `

    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirMercado(novoMercado) {
    const comando =`
    insert into tb_merc(
    ds_mercadoria,
    dt_entrega,
    vl_preco,
    qtd_produtos,
    nm_marca,
    ds_localicao)values(?,?,?,?,?,?)
    `
    const [info] = await connection.query(comando, [
      novoMercado.ds_mercadoria,
      novoMercado.dt_entrega,
      novoMercado.vl_preco,
      novoMercado.qtd_produtos,
      novoMercado.nm_marca,
      novoMercado.ds_localicao
    ])
    return info.insertId;
    
  }

  export async function listarMaterias() {
    const comando = `
    select * from tb_materiais
    `
    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirMateria(novaMateria) {
    const comando = `
    INSERT INTO tb_materiais (
      ds_material,
      qtd_produtos,
      dt_encomenda,
      vl_preco,
      lc_entregar,
      ds_escola,
      bt_bom
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const [info] = await connection.query(comando, [
      novaMateria.ds_material,
      novaMateria.qtd_produtos,
      novaMateria.dt_encomenda,
      novaMateria.vl_preco,
      novaMateria.lc_entregar,
      novaMateria.ds_escola,
      novaMateria.bt_bom
    ])
    return info.insertId;
  }

  export async function listarTenis(){
    const comando = `
    select * from tb_tenisb
    `

    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirTenis(novoTenis) {
    const comando =`
    insert into tb_tenisb(
    nm_marca,
    vl_tenis,
    bt_importado,
    dt_estoque,
    qtd_estoque,
    ds_cor
    ) values (?,?,?,?,?,?)
    `
    const [info] = await connection.query(comando, [
      novoTenis.nm_marca,
      novoTenis.vl_tenis,
      novoTenis.bt_importado,
      novoTenis.dt_estoque,
      novoTenis.qtd_estoque,
      novoTenis.ds_cor
    ])
    return info.insertId;
  }

  export async function listarEstados() {
    const comando = `
    select * from tb_trei
    `
    const [registros] = await connection.query(comando)
    return registros;
  }

  export async function inserirEstado(novoEstado) {
    const comando = `
    insert into tb_trei (
    ds_estado,
    ds_regiao,
    dt_data,
    qtd_populacao,
    ds_atracao,
    vl_orcamento,
    ds_famoso
    ) values (?,?,?,?,?,?,?)
    `
    const [info] = await connection.query(comando, [
      novoEstado.ds_estado,
      novoEstado.ds_regiao,
      novoEstado.dt_data,
      novoEstado.qtd_populacao,
      novoEstado.ds_atracao,
      novoEstado.vl_orcamento,
      novoEstado.ds_famoso
    ])
    return info.insertId;
  }