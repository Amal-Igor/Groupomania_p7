import { StyledInputs } from "../../components/Forms/Forms";
import styled from "styled-components";

const SignupForm = () => {

const SignupWrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem 10rem;
background-color: #0f032796;
width: 60%;
`
    
    return (
        <SignupWrapper>
        <StyledInputs labelfor={'username'} label={'Entrez un nom d\'utilsateur'} name={'username'} placeholder={'username'} />
        <StyledInputs labelfor={'username'} label={'Entrez un nom d\'utilsateur'} name={'username'} placeholder={'username'} />
        <StyledInputs labelfor={'username'} label={'Entrez un nom d\'utilsateur'} name={'username'} placeholder={'username'} />
        </SignupWrapper>
    )
}

export default SignupForm;