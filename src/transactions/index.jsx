// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Images from "../assets/img/soto.jpg";
import { Row, Col, Container } from "react-bootstrap";
import Style from "./transaction.module.css";
import { Image } from "react-bootstrap";
import { useState } from "react";

function Trsansactions() {
  const price = `${Style.price} text-center`;
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [barangBelanjaan, setBelanjaan] = useState({});
  const [jumlahBelanja,setJumlah] =useState(0);

  const handleClick = (id) => {
    // Handle click action here
    let qty =1;
    if (barangBelanjaan[id] != undefined){
      qty = parseInt(barangBelanjaan[id]+1);
    }
    setBelanjaan({
      ...barangBelanjaan,
      [id]:qty
    })

    setJumlah((e)=>{
      return e+1;
    });

    console.info(barangBelanjaan);
    alert (jumlahBelanja);
    
  };

  return (
    <Row>
      <Col lg="8">
        <Row>
          {items.map((id) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              style={{ width: "10rem" }}
              className="col-lg-3 ms-5 mt-3"
              onClick={() => handleClick(id)}
            >
              <Image src={Images} alt="Images of food " fluid />
              <Card.Body>
                <Card.Title className="text-center">Soto Ayam</Card.Title>
                <Card.Text className={price}>Rp.30.000</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Trsansactions;
