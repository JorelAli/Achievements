import express from 'express';
import userModel from '../models/user.mjs';

const router = express.Router();

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

export default router;
