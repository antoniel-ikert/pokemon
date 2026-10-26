
import { Router } from 'express';
import pokemonService from '../services/pokemon.service.js';

const router = Router();

router.post('/treinadores', async (req, res) => {
  const treinador = await pokemonService.createTreinador(req.body.nome);
  return res.status(201).json(treinador);
});

router.get('/treinadores', async (req, res) => {
  const treinadores = await pokemonService.getAllTreinadores();
  return res.status(200).json(treinadores);
});

router.post('/pokemons', async (req, res) => {
  const pokemon = await pokemonService.createPokemon(req.body);
  return res.status(201).json(pokemon);
});

router.get('/pokemons', async (req, res) => {
  const pokemons = await pokemonService.getAllPokemons();
  return res.status(200).json(pokemons);
});

router.put('/pokemons/:id', async (req, res) => {
  const pokemon = await pokemonService.updatePut(req.params.id, req.body);
  return res.status(200).json(pokemon);
});

router.patch('/pokemons/:id', async (req, res) => {
  const pokemon = await pokemonService.updatePatch(req.params.id, req.body);
  return res.status(200).json(pokemon);
});

router.delete('/pokemons/:id', async (req, res) => {
  await pokemonService.deletePokemon(req.params.id);
  return res.status(204).send();
});

export default router;