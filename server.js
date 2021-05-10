// Import modules
const express = require('express');
const routes = require('./routes');
const sequelize = require("sequelize");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish route handling based on routes directory
app.use(routes);

// Launch server to begin listening for requests
// NOTE -- update to force: false before deploying to production
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
