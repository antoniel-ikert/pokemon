import db from '../config/db.js';

class PokemonRepository {
  async create(dados) {
    const [pokemon] = await db('pokemons').insert(dados).returning('*');
    return pokemon;
  }

  async getAll() {
    return await db('pokemons')
      .join('treinadores', 'pokemons.treinador_id', 'treinadores.id')
      .select(
        'pokemons.id',
        'pokemons.nome',
        'pokemons.nivel',
        'pokemons.tipo',
        'treinadores.nome as treinador'
      );
  }

  async getById(id) {
    return await db('pokemons').where({ id }).first();
  }

  async updatePut(id, dados) {
    const [pokemon] = await db('pokemons')
      .where({ id })
      .update({
        nome: dados.nome,
        nivel: dados.nivel,
        tipo: dados.tipo,
        treinador_id: dados.treinador_id
      })
      .returning('*');
    return pokemon;
  }

  async updatePatch(id, dados) {
    const [pokemon] = await db('pokemons')
      .where({ id })
      .update(dados)
      .returning('*');
    return pokemon;
  }

  async delete(id) {
    return await db('pokemons').where({ id }).del();
  }
}

export default new PokemonRepository();