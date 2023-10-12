import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Style from './underline.module.css';


function tabUnderLine() {
  return (
    <Container>
    <Nav variant="underline" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" className={Style.tab}>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className={Style.tab}>Option 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Container>
  );
}

export default tabUnderLine;