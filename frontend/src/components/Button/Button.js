import styled from 'styled-components';
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledButton = (props) => {

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

    return(

        <Bouton className='styled-bouton' variant="contained"><ButtonIcon  icon={props.icon}></ButtonIcon>{props.text}</Bouton>
    )
}