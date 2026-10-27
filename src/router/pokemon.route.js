
import { Router } from 'express';
import pokemonController from '../controllers/pokemon.controller.js';

const router = Router();

router.post('/', pokemonController.createPokemon);

router.get('/', pokemonController.getAllPokemons);

router.get('/:id', pokemonController.getPokemonById);

router.put('/:id', pokemonController.updatePut);

router.patch('/:id', pokemonController.updatePatch);

router.delete('/:id', pokemonController.deletePokemon);

export default router;