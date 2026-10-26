import pool from "../config/db.js";

class PokemonService {
  async getAllPokemons() {
    const query = "SELECT * FROM pokemons";
    const result = await pool.query(query);
    return result.rows;
  }
}

async function getPokemonById(id) {
  const query = "SELECT * FROM pokemons WHERE id = $1";
  const result = await pool.query(query, [id]); 
    return result.rows[0];
}   
 
