import styled from "styled-components"

export const StyledInputs = ( {labelfor, label ,name, placeholder} ) => {

    const StyledLabel = styled.label`
    font-size: 1.8rem;
    color: white;
    `
    const StyledInput = styled.input`
    `
    
    return (
        <>
        <StyledLabel for={labelfor}>{label}</StyledLabel>
        <StyledInput type="text" id="name" name={name} placeholder={placeholder}></StyledInput>
        </>
    )
}