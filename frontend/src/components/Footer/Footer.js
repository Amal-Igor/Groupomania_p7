import './Footer.css'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.footer`
display: flex;
align-items: center;
min-height: 3rem;
justify-content: center;
padding: 0.5rem 0.7rem;
overflow: hidden;
background: #0f032796;
width: 100%;
gap: 3rem;
font-size: 1.6rem;
`



const Header = () => {

    return(
        <FooterWrapper id="footer-wrapper">
                <FontAwesomeIcon className='footer-icon'   icon={faFacebook} />
                <FontAwesomeIcon className ='footer-icon' icon={faInstagram} />
                <FontAwesomeIcon className ='footer-icon' icon={faTwitter} />
        </FooterWrapper>
    ) 
}

export default Header;