import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Style from './underline.module.css';


function tabUnderLine() {
  return (
    <Container>
    <Nav variant="underline" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" className={Style.tab}>Food</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className={Style.tab}>Transaksi</Nav.Link>
    </Nav.Item>
  </Nav>
  </Container>
  );
}

export default tabUnderLine;