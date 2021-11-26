import styled from 'styled-components';
import { useState } from 'react';
import  Axios  from 'axios';


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

const FormWrapper = styled.div`
Display:flex;
height: 50vh;
justify-content: space-evenly;
max-width: 60vw;
flex-direction: column;
`
const Welcome = styled.h1`
font-size: 35px;
`;

const input = styled.input`
height: 10%;
padding-left: 3px;
`;

const StyledButton = styled.button`
  height: 3em;
`


function Signin() {

const [MailLog, setMailLog] = useState('');
const [userPasswordLog, setPasswordLog] = useState('');

//Get login infos
const [loginStatus, setLoginStatus] = useState('');


const login = () => {
    Axios.post('http://localhost:3001/auth/signin', {
      email: MailLog,
      password: userPasswordLog,
    })
    .then((response) => {
    //Récupérartion des informations user
    if (response.data.message){
        console.log(response)
        setLoginStatus(response.data.message)
    } else {
        console.log(response)

        setLoginStatus(response.data[0].prenom)
    }
    })
    }
  

    return(
        <SignUpWrapper>
        <SignUpTitle>Connectez-vous !</SignUpTitle>
        <FormWrapper>
		<input type="email"  placeholder="Email" onChange={ (e) => {setMailLog(e.target.value)}} required></input>
		<input type="password" placeholder="Mot de passe" onChange={ (e) => {setPasswordLog(e.target.value)}} required></input>
        <StyledButton onClick={login}>Se connecter</StyledButton>
        </FormWrapper>
        <Welcome>{loginStatus}</Welcome>
    </SignUpWrapper>
    )

}

export default Signin