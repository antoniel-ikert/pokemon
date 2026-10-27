import db from '../config/db.js';

class PokemonService {
  async createTreinador(nome) {
    const [treinador] = await db('treinadores').insert({ nome }).returning('*');
    return treinador;
  }

  async getAllTreinadores() {
    return await db('treinadores').select('*');
  }

  async createPokemon(dados) {
    const [pokemon] = await db('pokemons').insert(dados).returning('*');
    return pokemon;
  }

  async getAllPokemons() {
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

  async getPokemonById(id) {
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

  async deletePokemon(id) {
    return await db('pokemons').where({ id }).del();
  }
}

export default new PokemonService();
 
