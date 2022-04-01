import { StyledInputs } from "../../components/Forms/Forms";
import styled from "styled-components";

const SignupForm = () => {

const SignupWrapper = styled.form`
display: flex;
flex-direction: column;
margin: 2rem 2rem;
padding: 3rem 10rem;
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