import styled from "styled-components";
import './Forms.css'

const StyledLabel = styled.label`
font-size: 1.6rem;
color: white;
`
const StyledInput = styled.input`
width: 25ch;
padding-left: .4rem;
padding-top: .4rem;
padding-bottom: .4rem;
`

export const StyledInputs = ( { event ,labelClassname, labelfor, label ,name, placeholder} ) => {


    return (
        <>
        <StyledLabel className={labelClassname} htmlFor={labelfor}>{label}</StyledLabel>
        <StyledInput onChange={event} type="text"  name={name} placeholder={placeholder}></StyledInput>
        </>
    )
}


const FormWrapper = styled.form`
display: flex;
flex-direction: column;
padding: 7rem 10rem;
background-color: #0f032796;
gap: 1.3rem;   
`
export const StyledForm = (props) => {

    return(
        <>
        <FormWrapper onSubmit={props.event} className="form-wrapper">{props.children}</FormWrapper>
        </>
    )
}