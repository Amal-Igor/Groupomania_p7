import styled from 'styled-components'
import Logo from '../../assets/logo/icon-left-font-monochrome-white.svg';
import { Link } from "react-router-dom";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';



const LogoStyled = styled.img`
height: 5em;
width: 15em;
margin-right: auto;
`;

const HeaderWrapper = styled.header`
background: rgb(0,0,0);
background: linear-gradient(
    27deg,rgb(11 10 10 / 97%) 0%,rgb(10 10 10 / 85%) 50%,rgb(0 0 0 / 95%) 100%);  
display: flex;
padding: 10px 40px 0px 40px;
border-radius: 0 0 33px 33px;
postion: relative;
align-items: center;
;`


function Header() {


    return(
        <HeaderWrapper>
            <LogoStyled alt="logo" src={Logo}/>       
            <Link to="auth/signup" >S'INSCRIRE</Link>
            <Link to="auth/signin" >SE CONNECTER</Link>
            <Link to="auth/home">ACCEUIL</Link>
            <Link to="auth/profile"> PROFIL</Link>
        </HeaderWrapper>



    )
}

export default Header;


/*<Link to="auth/signup">S'INSCRIRE</Link>
            <Link to="auth/signin">SE CONNECTER</Link>
            <Link to="/home">ACCEUIL</Link>
            <Link to="auth/profile">PROFIL</Link>*/ 



            /*
        <HeaderWrapper>
        <Navbar bg="light" expanded={expanded}>
    <Container>
    <Navbar.Toggle email  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">

            <Link to="auth/signup" onClick={() => setExpanded(false)}>
                <NavDropdown.Item href="#action/3.1">S'INSCRIRE</NavDropdown.Item>
            </Link>

            <Link to="auth/signin" onClick={() => setExpanded(false)}>
                <NavDropdown.Item href="#action/3.2">SE CONNECTER</NavDropdown.Item>
            </Link>

            <Link to="auth/home"onClick={() => setExpanded(false)}>
                <NavDropdown.Item href="#action/3.3">ACCEUIL</NavDropdown.Item>
            </Link>

        <Link to="auth/profile" onClick={() => setExpanded(false)}> 
          <NavDropdown.Item href="#action/3.4">PROFIL</NavDropdown.Item>
          </Link>

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

            <LogoStyled alt="logo" src={Logo}/>
            

        </HeaderWrapper>*/