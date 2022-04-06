import { StyledInputs, StyledForm } from "../../components/Forms/Forms";
import { ButtonWoIcon } from "../../components/Button/Button";
import { useState } from "react";
import { SignupService } from "../../components/Services/ServiceLayer.js"





const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const signupData = {username : `${username}`, email: `${email}`, password: `${password}`}
        console.log(signupData);
        await SignupService(signupData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <StyledForm event={handleSignup} id="signup-form">
            <StyledInputs event={(e) => {setUsername(e.target.value)}} labelClassname={'signupform-label'} labelfor={'username'} label={'Entrez un nom d\'utilsateur'} name={'username'} placeholder={'username'} />
            <StyledInputs event={(e) => setEmail(e.target.value)} labelClassname={'signupform-label'} labelfor={'email'} label={'Entrez un email'} name={'email'} placeholder={'email'} />
            <StyledInputs event={(e) => setPassword(e.target.value)} labelClassname={'signupform-label'} labelfor={'password'} label={'Entrez un mot de passe'} name={'password'} placeholder={'password'} />
            <ButtonWoIcon text={'Créer un compte'} />
        </StyledForm>
    )
}

export default SignupForm;