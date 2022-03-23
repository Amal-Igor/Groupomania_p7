import logo from '../../assets/icon-left-font-monochrome-black.svg';
import styled from 'styled-components';
import './Header.css'
import { StyledButton as ConnectionButton} from '../Button/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
min-height: 3rem;
height:9vh;
justify-content: space-between;
padding: 0.1rem 0.7rem;
`

const Logo = styled.img`
height: 80%;
max-width: 14rem;
margin: auto 0;
`

const Header = () => {

    return(
        <HeaderWrapper> 
            <Logo src={logo} alt='logo'/>
            <ConnectionButton className ="connection-button" icon={faUser} text={'Se connecter'}/>
        </HeaderWrapper>
    ) 
}

export default Header;