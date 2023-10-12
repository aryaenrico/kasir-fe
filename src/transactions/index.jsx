import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../assets/img/soto.jpg';
import Container from 'react-bootstrap/Container';
import Style from './transaction.module.css';


function Trsansactions() {
  return (
    <Container>
    <Card style={{ width: '18rem' }}>
      {/* //<Card.Img variant="full" src={Image} /> */}
      <div className={Style.frame}>
       <img src={Image} alt="image of food "  />
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Trsansactions;