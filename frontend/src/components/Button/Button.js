import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledButton = (props) => {

    const Bouton = styled.button`
    &{
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-size: 1.1rem;
    font-weight: 600;
    justify-content: center;
    margin: 0;
    max-height: 80%;
    padding: calc(.875rem - 1px) calc(0.7rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
    gap: .7rem;
    }
        &:hover, &:focus{
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
    }
        &:hover{
            transform: translateY(-1px);
        }
        &:active{
            background-color: #F0F0F1;
            border-color: rgba(0, 0, 0, 0.15);
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
            color: rgba(0, 0, 0, 0.65);
            transform: translateY(0);
        }
    `;

    const ButtonIcon = styled(FontAwesomeIcon)`
    font-size:1.2rem;
    `

    return(

        <Bouton variant="contained"><ButtonIcon icon={props.icon}></ButtonIcon>{props.text}</Bouton>
    )
}