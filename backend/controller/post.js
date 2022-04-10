const db = require('../config/db');
const Post = require('../models/Post');
const PostDto = require('../dto/PostDto');
const User = require('../models/User');



exports.createPost = async (req , res) => {

            const postDto = new  PostDto(`${req.body.text}`, `${req.body.image}`);
            Post.create(postDto)
                .then( () => { res.status(200).send(" Post crée avec succès");})
                .catch( (err) => res.status(404).send(err))

}