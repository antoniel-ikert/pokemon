import knex from 'knex';
import 'dotenv/config';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'senai',
    database: process.env.PGDATABASE || 'pokemon',
    port: process.env.PGPORT || 5432,
  },
});

export default db;