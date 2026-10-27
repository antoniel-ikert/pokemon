import pokemonService from '../services/pokemon.service.js';

class PokemonController {
  async createPokemon(req, res) {
    try {
      const pokemon = await pokemonService.createPokemon(req.body);
      return res.status(201).json(pokemon);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async getAllPokemons(req, res) {
    try {
      const pokemons = await pokemonService.getAllPokemons();
      return res.status(200).json(pokemons);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async getPokemonById(req, res) {
    try {
      const pokemon = await pokemonService.getPokemonById(req.params.id);
      if (!pokemon) {
        return res.status(404).json({ mensagem: 'Pokémon não encontrado.' });
      }
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async updatePut(req, res) {
    try {
      const pokemon = await pokemonService.updatePut(req.params.id, req.body);
      if (!pokemon) {
        return res.status(404).json({ mensagem: 'Pokémon não encontrado.' });
      }
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async updatePatch(req, res) {
    try {
      const pokemon = await pokemonService.updatePatch(req.params.id, req.body);
      if (!pokemon) {
        return res.status(404).json({ mensagem: 'Pokémon não encontrado.' });
      }
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async deletePokemon(req, res) {
    try {
      const deletado = await pokemonService.deletePokemon(req.params.id);
      if (!deletado) {
        return res.status(404).json({ mensagem: 'Pokémon não encontrado.' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

export default new PokemonController();
