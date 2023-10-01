// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// Create a new user
router.get('/', (req, res) => {
  const userData = req.body;
  userModel.create(userData, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(user);
  });
});

module.exports = router;
