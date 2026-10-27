import express from 'express';
import treinadorRouter from './routes/treinador.router.js';
import pokemonRouter from './routes/pokemon.router.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/treinadores', treinadorRouter);
app.use('/pokemons', pokemonRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});