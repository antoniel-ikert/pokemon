import db from '../config/db.js';

class TreinadorService {
  // Insere um novo treinador no banco de dados
  async createTreinador(nome) {
    const [treinador] = await db('treinadores').insert({ nome }).returning('*');
    return treinador;
  }

  // Busca todos os treinadores cadastrados
  async getAllTreinadores() {
    return await db('treinadores').select('*');
  }
}

export default new TreinadorService();