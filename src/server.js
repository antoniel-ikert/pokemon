import express from 'express';
import pokemonRouter from './router/pokemon.route.js';

const port =  3000;
const app = express();

app.use(express.json());
app.use("/pokemon", pokemonRouter);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});