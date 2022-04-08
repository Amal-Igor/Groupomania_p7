const jwt = require('jsonwebtoken')
const db = require('../config/db');
const User = require('../models/User');


exports.userAuth = async (req, res, next) => {
    try {
      console.log(req.body.userId)
      const token = req.headers.authorization.split(' ')[2];
      console.log(token)
      const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
      console.log(decodedToken)
      const userId = decodedToken.userId;
      const user = await User.findOne({ where: { id: `${userId}`}})

      if (user.id !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };


exports.adminAuth = async (req, res, next) => {
    const user = await User.findOne({ where: { username: `${req.body.username}`}})

    try {
      const token = req.headers.authorization.split(' ')[2];
      const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
      const isAdmin = decodedToken.isAdmin;
      console.log(decodedToken.isAdmin)
      if (!isAdmin) {
          return res.status(401).json({error: "User role non valable !"})
      } else{
          console.log(decodedToken)
          next();
      }
  } catch (error) {
      res.status(401).json({ error: error | 'Requête non authentifiée !' });
  }
  };
  