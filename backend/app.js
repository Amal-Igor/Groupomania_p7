const express = require('express');
const session = require('express-session')
const userRoutes = require('./routes/user')
const bodyParser = require('express');
require('dotenv').config()
const app = express();

app.use(express.json());



/// Middleware Header pour contourner les erreurs en dÃ©bloquant certains systÃ¨mes de sÃ©curitÃ© CORS, afin que tout le monde puisse faire des requetes depuis son navigateur
app.use((req, res, next) => {
    // on indique que les ressources peuvent Ãªtre partagÃ©es depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Origin', '*');
    // on indique les entÃªtes qui seront utilisÃ©es aprÃ¨s la prÃ©-vÃ©rification cross-origin afin de donner l'autorisation
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // on indique les mÃ©thodes autorisÃ©es pour les requÃªtes HTTP
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/auth', userRoutes);

module.exports = app;


