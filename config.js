
const PGHOST = process.env.PGHOST || 'localhost';
const PGDATABASE = process.env.PGDATABASE || 'postgres';
const PGUSER = process.env.PGUSER || 'postgres';
const PGPASSWORD = process.env.PGPASSWORD || 'password';

export {PGHOST, PGDATABASE, PGUSER, PGPASSWORD};