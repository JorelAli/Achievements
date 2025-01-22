import db from '../db.mjs';

// Create a users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT
  )`);
});

// Define user model functions
export default {
  create: (userData, callback) => {
    const { username, email } = userData;
    db.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (err) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { username, email });
      }
    });
  },
  // Add other user-related functions here
};
