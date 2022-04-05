import styled from 'styled-components';
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bouton = styled.button`

&:hover, &:focus{
border-color: rgba(0, 0, 0, 0.15);
box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
background-color: #F0F0F12B;

}
&:hover{
    transform: translateY(-0.2px);
}
&:active{
    background-color: #F0F0F12B;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
}
`;

const ButtonIcon = styled(FontAwesomeIcon)`
font-size:1.2rem;
`

export const StyledButton = (props) => {



    return(

        <Bouton onClick={props.action} className={`styled-bouton ${props.typeOf}-button`} style={props.customStyle} variant="contained"><ButtonIcon  icon={props.icon}></ButtonIcon>{props.text}</Bouton>
    )
};

const ButtonSimple = styled.button`

&:hover, &:focus{
border-color: rgba(0, 0, 0, 0.15);
box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
background-color: #F0F0F12B;

}
&:hover{
    transform: translateY(-0.2px);
}
&:active{
    background-color: #F0F0F12B;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
}
`;
export const ButtonWoIcon = (props) => {

 

    return(

        <ButtonSimple onClick={props.action} className={`styled-bouton ${props.typeOf}-button`} style={props.customStyle} variant="contained">{props.text}</ButtonSimple>
    )
}