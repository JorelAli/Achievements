// backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path'); // Add path module
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const collectionRoutes = require('./routes/collectionRoutes'); // Import collection routes

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Use user routes
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
