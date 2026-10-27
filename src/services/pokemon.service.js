import pokemonRepository from '../repositories/pokemon.repository.js';
import treinadorRepository from '../repositories/treinador.repository.js';

class PokemonService {
  async createTreinador(nome) {
    return await treinadorRepository.create(nome);
  }

  async getAllTreinadores() {
    return await treinadorRepository.getAll();
  }

  async createPokemon(dados) {
    return await pokemonRepository.create(dados);
  }

  async getAllPokemons() {
    return await pokemonRepository.getAll();
  }

  async getPokemonById(id) {
    return await pokemonRepository.getById(id);
  }

  async updatePut(id, dados) {
    return await pokemonRepository.updatePut(id, dados);
  }

  async updatePatch(id, dados) {
    return await pokemonRepository.updatePatch(id, dados);
  }

  async deletePokemon(id) {
    return await pokemonRepository.delete(id);
  }
}

export default new PokemonService();
 
