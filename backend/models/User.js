const { Sequelize } = require ('sequelize');
const db = require('../config/db')  


//TODO = Implémenter regex?

const User = db.define('user', {
    username:{
        type: Sequelize.STRING,
        unique: true
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    isAdmin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

module.exports = User;