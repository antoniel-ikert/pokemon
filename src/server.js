import express from 'express';
import treinadorRouter from './router/treinador.route.js';
import pokemonRouter from './router/pokemon.route.js';

const port = 3000;
const app = express();


app.use(express.json());

// Registro dos dois routers
app.use('/treinadores', treinadorRouter);
app.use('/pokemons', pokemonRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
