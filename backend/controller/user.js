const mysql = require ('mysql');

//Connection à la base de donnée
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "groupomania",
});


exports.signup = (req, res) => {
    const userLastName = req.body.nom;
    const username = req.body.prenom;
    const password = req.body.password;
    const email = req.body.email;
    
    
    db.query(
        "INSERT INTO users (nom, prenom, email, password) VALUES ( ?, ?, ?, ?)",
        [userLastName, username, email, password],
        (err, result) => { if (err) {
            res.send(err)
        }
            else{res.send([result]);}
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
