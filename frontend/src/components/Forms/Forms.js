import styled from "styled-components";

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

export const StyledInputs = ( { action ,labelClassname, labelfor, label ,name, placeholder} ) => {


    return (
        <>
        <StyledLabel className={labelClassname} htmlFor={labelfor}>{label}</StyledLabel>
        <StyledInput onChange={action} type="text"  name={name} placeholder={placeholder}></StyledInput>
        </>
    )
}