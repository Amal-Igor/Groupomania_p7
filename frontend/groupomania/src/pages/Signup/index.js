import styled from 'styled-components';
import  Axios  from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const SignUpWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const SignUpTitle = styled.h1`
color: #181817e0;
font-weight: 400;
font-size: 3em;
`;

const input = styled.input`
height: 10%;
padding-left: 3px;
`;

const StyledButton = styled.button`
  height: 3em;
`
 const FormWrapper = styled.div`
 Display:flex;
 height: 50vh;
 justify-content: space-evenly;
 max-width: 60vw;
 flex-direction: column;
 `


function Signup() {
  //Styles Register


const [userLastNameReg, setLastNameReg] = useState('');
const [userNameReg, setNameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');
const [emailReg, setEmailReg] = useState('');


//Register axios



const register = () => {

  Axios.post('http://localhost:3001/auth/signup', {
    nom : userLastNameReg,
    prenom: userNameReg,
    password: passwordReg,
    email: emailReg,
  })
  .then((response) => {
    let res = response.data
    console.log(res);


  })
  }

  return (
    <SignUpWrapper>
      <SignUpTitle>Inscrivez-vous !</SignUpTitle>
        <FormWrapper>
            <input type="text"  placeholder="Nom" 
            onChange={ (e) => {setLastNameReg(e.target.value)}} required>
            </input>
				    <input type="text"  placeholder="Prenom" onChange={ (e) => {setNameReg(e.target.value)}} required>
            </input>
            <input type="email"  placeholder="Email" onChange={ (e) => {setEmailReg(e.target.value)}} unique="true" required></input>
				    <input type="password"   placeholder="Mot de passe" required onChange={ (e) => {setPasswordReg(e.target.value)}}></input>
        <StyledButton onClick={register}> S'inscrire</StyledButton>
        </FormWrapper>
    </SignUpWrapper>
  );
}

export default Signup;
