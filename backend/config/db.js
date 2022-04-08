const { Sequelize } = require ('sequelize');


const db = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
  host: `${process.env.DB_HOST}`,
  dialect: `${process.env.DB_DIALECT}`
});

db.authenticate()
.then( () => console.log(`Connected to Database ${process.env.DB_NAME} on port ${process.env.DB_PORT}`))
.catch( (err) => console.log('Error trying to connect to db ' + err))

module.exports = db
