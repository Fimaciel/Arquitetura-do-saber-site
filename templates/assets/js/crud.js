const { Pool } = require("pg");

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "arquiteturadosaberbd",
  password: "G@riogalio69",
  port: 5432, // porta padrão do PostgreSQL
});

// Função para criar um novo registro de acessoria
async function criarAcessoria(novaAcessoria) {
  const {
    titulo,
    subtitulo,
    sobre,
    fotoCapa,
    fotos,
    informacoes,
    publicador,
    data,
  } = novaAcessoria;
  const query =
    "INSERT INTO acessoria (titulo, subtitulo, sobre, foto_capa, fotos, informacoes, publicador, data) VALUES (titulo, subtitulo, sobre, foto_capa, fotos, informacoes, publicador, data)";
  const values = [
    titulo,
    subtitulo,
    sobre,
    fotoCapa,
    fotos,
    informacoes,
    publicador,
    data,
  ];
  await pool.query(query, values);
}

// Função para ler todas as acessorias
async function lerAcessorias() {
  const query = "SELECT * FROM acessoria";
  const result = await pool.query(query);
  return result.rows;
}

// Função para atualizar uma acessoria existente
async function atualizarAcessoria(id, novaAcessoria) {
  const {
    titulo,
    subtitulo,
    sobre,
    fotoCapa,
    fotos,
    informacoes,
    publicador,
    data,
  } = novaAcessoria;
  const query =
    "UPDATE acessoria SET titulo = titulo, subtitulo = subtitulo, sobre = sobre, foto_capa = foto_capa, fotos =fotos, informacoes = informacoes, publicador = publicador, data = data WHERE id = id";
  const values = [
    titulo,
    subtitulo,
    sobre,
    fotoCapa,
    fotos,
    informacoes,
    publicador,
    data,
    id,
  ];
  await pool.query(query, values);
}

// Função para excluir uma acessoria existente
async function excluirAcessoria(id) {
  const query = "DELETE FROM acessoria WHERE id = $1";
  const values = [id];
  await pool.query(query, values);
}

// Exemplo de uso das funções CRUD para acessoria
async function executarCRUDAcessoria() {
  await criarAcessoria({
    titulo: "Título da Acessoria",
    subtitulo: "Subtítulo da Acessoria",
    sobre: "Informações sobre a Acessoria",
    fotoCapa: "caminho/para/foto-capa.jpg",
    fotos: [
      "caminho/para/foto1.jpg",
      "caminho/para/foto2.jpg",
      "caminho/para/foto3.jpg",
    ],
    informacoes: "Informações adicionais da Acessoria",
    publicador: "Nome do Publicador",
    data: new Date(),
  });

  const acessorias = await lerAcessorias();
  console.log(acessorias);

  const idAcessoriaAtualizar = 1;
  await atualizarAcessoria(idAcessoriaAtualizar, {
    titulo: "Novo Título",
    subtitulo: "Novo Subtítulo",
    sobre: "Novas informações sobre a Acessoria",
    fotoCapa: "caminho/para/nova-foto-capa.jpg",
    fotos: ["caminho/para/nova-foto1.jpg", "caminho/para/nova-foto2.jpg"],
    informacoes: "Novas informações adicionais da Acessoria",
    publicador: "Novo Publicador",
    data: new Date(),
  });

  const idAcessoriaExcluir = 2;
  await excluirAcessoria(idAcessoriaExcluir);

  const novasAcessorias = await lerAcessorias();
  console.log(novasAcessorias);
}

executarCRUDAcessoria().catch(console.error);
