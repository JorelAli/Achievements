// backend/db.js
const sqlite3 = require('sqlite3').verbose();

// Create and initialize the SQLite3 database
const db = new sqlite3.Database(':memory:');

// Export the database instance
module.exports = db;
