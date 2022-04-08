import logo from '../../assets/icon-left-font-monochrome-black-modif8.png';
import styled from 'styled-components';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isUserConnected, logout } from '../Utils/Utils';
import { StyledButton } from '../Button/Button';
import { faUser, faUserPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: center;
min-height: 3rem;
justify-content: space-around;
padding: 0.5rem 0.7rem;
overflow: hidden;
background: #0f032796;
width: 100%;
`

const Logo = styled.img`
height: 100%;
max-width: 18rem;
margin: auto 0;
`

const ButtonWrapper = styled.div`
display: flex;
gap: 1.1rem;
`


const Header = () => {
    let navigate = useNavigate();
    const [buttonText, setButtonText]=useState('');

    const getUsername = () => {
        if(localStorage.getItem('username') !== null){
            setButtonText(localStorage.getItem('username'))
        }else{
            setButtonText('Connexion')
        }
    }

    useEffect( () => {
        getUsername();
    })

    const handleProfile = (e) => {
        e.preventDefault();
        if (localStorage.length <= 0){
            navigate("/login")
        }else{navigate("/profile")}
    }

    const handleSignup = (e) => {
        e.preventDefault();
            navigate("/signup")}
    
    return(
        <HeaderWrapper id='header-wrapper'>
            <Logo src={logo} alt='logo'/>
            <ButtonWrapper>
                <StyledButton  action={handleSignup} typeOf= {'header'} icon={faUserPlus} text={'S\'inscrire'} />
                <StyledButton  action={handleProfile} typeOf= {'header'} icon={faUser} text={buttonText}/>
                {isUserConnected()? <StyledButton icon={faPowerOff} action={logout} /> : <></>}
            </ ButtonWrapper>
        </ HeaderWrapper>
    ) 
}

export default Header;