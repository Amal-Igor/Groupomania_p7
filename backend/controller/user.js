const db = require('../config/db');
const User = require('../models/User');
const UserDto = require('../dto/UserDto');
const bcrypt = require('bcrypt')




exports.signup = async (req , res) => {
    //Vérification que l'utilisateur n'est pas déj) présent dans la BDD
    const user = await User.findOne({ where: { username: `${req.body.username}`}})
    if (user === null) {
    //Encryption du mot de pass
    const encryptedPassword= await bcrypt.hash(`${req.body.password}`, 10, function(err, hash) {
              if(err) {
            console.log(err)
        }
        else{
            //Récupération de l'objetUser grace au DTO
            const userDto = new  UserDto (`${req.body.username}`, `${req.body.email}`, hash);
            User.create(userDto)
                .then( () => { res.status(200).send(" Votre compte a bien été crée !");})
                .catch( (err) => res.status(404).send("Erreur à la création du compte"))
        }})
        }

        else{
            res.status(401).send("Nom d'utilisateur déjà utilisé !")
        }
    

 
    
    
}



/*
exports.signup = (req, res) => {
    const userLastName = req.body.nom;
    const username = req.body.prenom;
    const password = req.body.password;
    const email = req.body.email;
    
    
    db.query(
        "INSERT INTO users (nom, prenom, email, password) VALUES ( ?, ?, ?, ?)",
        [userLastName, username, email, password],
        (err, result) => { if (err) {
            
            res.status(208).send(err);
        }
            else{
                res.send(result);}
        }
    );

}



exports.signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if(err){
                //Permet d'envoyer une réponse au front en cas d'erreur
                res.send({err: error});
            } else {
                if (result.length > 0) {

                    res.send(result);
                } else{
                    res.send({message : "Nous ne trouvons le compte associé à ce nom d'utilisateur"});
                }
            }     
        }
    )
}
*/