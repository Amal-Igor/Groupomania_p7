import { StyledInputs } from "../../components/Forms/Forms";
import { ButtonWoIcon } from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { SignupService } from "../../components/Services/ServiceLayer.js"
import './Signup.css'
import styled from "styled-components";


const SignupWrapper = styled.form`
display: flex;
flex-direction: column;
padding: 7rem 10rem;
background-color: #0f032796;
gap: 1.3rem;
`

const SubmitButton = styled(ButtonWoIcon)`
`
const SignupForm = () => {



const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');




const handleSignup = async () => {
    const signupData = {username : `${username}`, email: `${email}`, password: `${password}`}
    console.log(signupData);
    await SignupService(signupData)
        .then(res => console.log(res))
        .catch(err => console.log(err));

}

    
    return (
        <form id="signup-form">
            <StyledInputs action={(e) => {setUsername(e.target.value)}} labelClassname={'signupform-label'} labelfor={'username'} label={'Entrez un nom d\'utilsateur'} name={'username'} placeholder={'username'} />
            <StyledInputs action={(e) => setEmail(e.target.value)} labelClassname={'signupform-label'} labelfor={'email'} label={'Entrez un email'} name={'email'} placeholder={'email'} />
            <StyledInputs action={(e) => setPassword(e.target.value)} labelClassname={'signupform-label'} labelfor={'password'} label={'Entrez un mot de passe'} name={'password'} placeholder={'password'} />
            <SubmitButton action={handleSignup()} text={'Créer un compte'} />
        </form>
    )
}

export default SignupForm;