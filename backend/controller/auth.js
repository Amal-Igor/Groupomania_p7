const db = require('../config/db');
const User = require('../models/User');
const UserDto = require('../dto/UserDto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req , res) => {
    //Vérification que l'utilisateur n'est pas déj) présent dans la BDD
    const user = await User.findOne({ where: { username: `${req.body.username}`}})
    if (user === null) {
    //Encryption du mot de passe
    const encryptedPassword= await bcrypt.hash(`${req.body.password}`, 10, function(err, hash) {
              if(err) {
            console.log(err)
        }
        else{
            //Récupération de l'objetUser grace au DTO
            const userDto = new  UserDto(`${req.body.username}`, `${req.body.email}`, hash);
            User.create(userDto)
                .then( () => { res.status(200).send(" Votre compte a bien été crée !");})
                .catch( (err) => res.status(404).send("Erreur à la création du compte"))
        }
    })
    }
        else{
            res.status(401).send("Nom d'utilisateur déjà utilisé !")
        }
}

exports.login = async (req , res) => {
        //Vérification de l'attribut unique permettant d'identifier l'utilsiateur : username
        const user = await User.findOne({ where: { username: `${req.body.username}`}})
        if(user === null){
            res.status(400).send("Nous ne trouvons pas de compte associé à ce nom d'utilisateur")
        }
        else{
        //Décryptage du mdp présent dans la base de donnée pour le vérifier
        const decodedPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(decodedPassword);
            
            if(!decodedPassword){
                return res.status(400).send('Mot de passe/Username incorrect !')
            }
            else{
                const jwtToken = {
                    userId: user.id,
                    username: user.username,
                    token: jwt.sign(
                        {userId: user.id, isAdmin: user.isAdmin}, `${process.env.JWT_SECRET}`, {expiresIn: '24h'})
                }
                res.json(jwtToken).status(200);
            }
        }
}

exports.getInfos = async (req , res) =>{
    const user = await User.findOne({ where: { id: `${req.params['id']}`}})
    if(user === null){
            res.status(400).send("Nous ne trouvons pas de compte associé à ce nom d'utilisateur")
        }
    
    else{ res.json(user).status(200)}
}

exports.test = (req, res) => {
    res.send("t'es un bogoss amal")
}