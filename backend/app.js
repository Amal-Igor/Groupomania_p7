require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('express');
const PORT = process.env.SERVER_PORT;
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const cors = require('cors')

app.use(cors())
app.use(express.json());


// Désactivation du blocage des requêtes CORS
app.use((req, res, next) => {
  // on indique que les ressources peuvent Ãªtre partagÃ©es depuis n'importe quelle origine
res.setHeader('Access-Control-Allow-Origin', '*');
  // on indique les entÃªtes qui seront utilisÃ©es aprÃ¨s la prÃ©-vÃ©rification cross-origin afin de donner l'autorisation
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // on indique les mÃ©thodes autorisÃ©es pour les requÃªtes HTTP
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next();
});

//Implementation des routes users
app.use('/', authRoutes);

app.use('/post', postRoutes);

//app.use('/users', userRoutes)


app.listen(PORT, console.log(`Server started on port ${PORT}`))












/*
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
*/


module.exports = app;


