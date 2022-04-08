const { Sequelize } = require ('sequelize');
const db = require('../config/db');
const User = require('./User')

const Post = db.define('post', {
    text:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    }
})


module.exports = Post;