# API de Pokémon

API REST em Node.js, Express, Knex e PostgreSQL para gerenciar treinadores e seus Pokémon.

## Configuração

1. Instale as dependências com `npm install`.
2. Crie um banco PostgreSQL chamado `pokemon` (ou escolha outro no ambiente).
3. Copie `.env.example` para `.env` e configure as credenciais do PostgreSQL.
4. Execute `npm run migrate` para criar as tabelas.
5. Inicie a API com `npm run dev`.

As migrations criam `treinadores` e `pokemons`. Cada Pokémon tem um único treinador obrigatório (`treinador_id`); um treinador pode possuir vários Pokémon. O tipo é limitado a `normal`, `fogo`, `agua`, `grama`, `voador`, `lutador` ou `venenoso`.

## Rotas

### Pokémon — `/pokemon`

- `GET /pokemon` — lista Pokémon com o nome do treinador.
- `GET /pokemon/:id` — busca por UUID.
- `POST /pokemon` — cria; requer `nome`, `nivel`, `tipo` e `treinador_id`.
- `PUT /pokemon/:id` — substitui os campos; requer todos os campos acima.
- `PATCH /pokemon/:id` — atualiza parcialmente qualquer campo permitido.
- `DELETE /pokemon/:id` — exclui.

### Treinadores — `/treinadores`

- `GET /treinadores` e `GET /treinadores/:id` — lista/busca; a busca inclui os Pokémon do treinador.
- `POST /treinadores` — cria com `{ "nome": "Ash" }`.
- `PUT /treinadores/:id` — substitui o nome.
- `PATCH /treinadores/:id` — atualiza o nome.
- `DELETE /treinadores/:id` — exclui se não possuir Pokémon.

Corpos JSON usam nomes de campos em português. Os IDs UUID são gerados pelo PostgreSQL.

