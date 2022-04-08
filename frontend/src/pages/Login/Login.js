import { StyledInputs, StyledForm } from "../../components/Forms/Forms";
import { ButtonWoIcon } from "../../components/Button/Button";
import { useState } from "react";
import { LoginService } from "../../components/Services/AuthService";
import { reloadPage } from "../../components/Utils/Utils";






const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup =  (e) => {
        e.preventDefault();
        const signupData = {username : `${username}`, password: `${password}`}
        LoginService(signupData)
        
    }
    return (
        <StyledForm event={handleSignup} id="signup-form">
            <StyledInputs event={(e) => {setUsername(e.target.value)}} labelClassname={'signupform-label'} labelfor={'username'} label={'Entrez votre nom d\'utilsateur'} name={'username'} placeholder={'username'} />
            <StyledInputs event={(e) => setPassword(e.target.value)} labelClassname={'signupform-label'} labelfor={'password'} label={'Entrez votre mot de passe'} name={'password'} placeholder={'password'} />
            <ButtonWoIcon text={'Se connecter'} />
        </ StyledForm>
    )
}

export default LoginForm;