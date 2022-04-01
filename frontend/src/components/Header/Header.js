import logo from '../../assets/icon-left-font-monochrome-black-modif8.png';
import styled from 'styled-components';
import './Header.css';
import { Link } from 'react-router-dom';
import { StyledButton } from '../Button/Button';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: center;
min-height: 3rem;
justify-content: space-around;
padding: 0.5rem 0.7rem;
overflow: hidden;
background: #0f032796;
`

const Logo = styled.img`
height: 100%;
max-width: 18rem;
margin: auto 0;
`

const ButtonWrapper = styled.div`
display: flex;
gap: 2rem;
`

const NavLink = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
`

const Header = () => {

    return(
        <HeaderWrapper>
            <Logo src={logo} alt='logo'/>
            <ButtonWrapper>
                <NavLink to='/signup'> <StyledButton className='signin-button header-button'   icon={faUserPlus} text={'S\'inscrire'} /></NavLink>
                <NavLink to='/login' ><StyledButton className ='connection-button header-button' icon={faUser} text={'Connexion'}/></NavLink>
            </ButtonWrapper>
        </HeaderWrapper>
    ) 
}

export default Header;