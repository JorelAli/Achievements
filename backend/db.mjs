import sqlite3 from 'sqlite3';

// Create and initialize the SQLite3 database
const db = new sqlite3.Database(':memory:');

// Export the database instance
export default db;
