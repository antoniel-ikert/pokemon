import db from '../config/db.js'; // Ajuste o caminho do seu arquivo de conexão se necessário

export const treinadorRepository = {
  // 1. Listar todos os treinadores
  async listar() {
    return await db('treinadores').select('*');
  },

  // 2. Buscar um treinador por ID
  async buscarPorId(id) {
    return await db('treinadores').where({ id }).first();
  },

  // 3. Criar um novo treinador
  async criar(dados) {
    const [novoTreinador] = await db('treinadores')
      .insert(dados)
      .returning('*');
    return novoTreinador;
  },

  // 4. Atualizar um treinador
  async atualizar(id, dados) {
    const [treinadorAtualizado] = await db('treinadores')
      .where({ id })
      .update(dados)
      .returning('*');
    return treinadorAtualizado;
  },

  // 5. Deletar um treinador
  async deletar(id) {
    return await db('treinadores').where({ id }).del();
  }
};