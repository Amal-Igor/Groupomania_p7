const bcrypt = require("bcrypt");
const { appendFile } = require("fs");
const mysql = require('mysql');
const express = require('express');




//Authentification à la base de donnée
//CrÃ©ation du middleware d'inscription sur le site
//CrÃ©ation du middleware d'inscription sur le site
exports.signup = (req, res, next) => {
    //On commence par hasher le mdp
    bcrypt.hash(req.body.password, 10)
     .then(hash => {
         //On crÃ©e un nouvel Utilisateur en utilisant le modÃ¨le dÃ©finit par mongoose
         const user = new User ({
             email: req.body.email,
             password: hash});
         //On enregistre l'utilisateur prÃ©cÃ¨demment crÃ©e afin de l'enregistrer dans la DB avec la fonction .save
         user.save()
         .then(() => res.status(201).json({message: 'Utilisateur crÃ©e!'}))
         .catch(error => res.status(400).json({error}));
 
     })
     .catch(error => res.status(500).json({message: 'Utilisateur non crÃ©e!'}));
 };
 