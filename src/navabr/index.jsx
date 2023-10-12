import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


import Style from './nav.module.css';

function Header() {
    //const styleText =`${Style.text}`; 
  return (
    <Navbar expand="lg" className={Style.background}>
    <Container>
      <Navbar href="#home" className={Style.text}>Alana Resto</Navbar>
    </Container>
  </Navbar>
  );
}

export default Header;