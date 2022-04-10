const { Sequelize } = require ('sequelize');
const db = require('../config/db');

const Post = db.define('post', {
    text:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    }
})


Post.sync()


module.exports = Post;