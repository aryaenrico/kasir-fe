// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Images from "../assets/img/soto.jpg";
import { Row, Col, Button, Container } from "react-bootstrap";
import Style from "./transaction.module.css";
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Trsansactions() {
  const price = `${Style.price} text-center`;
  const [items, setItem] = useState([]);
  
  const getData = async () => {
    await axios.get("http://localhost:8080/food").then((response) => {
      setItem(response.data.data);
      
    });
  };
 let  allCharge =(data)=>{
    let biaya =0;
    Object.keys(data).map((key) => {
      let current = data[key]["price"] * data[key]["jumlah"];
      biaya+=current; 
    })
    return biaya;

  } 
  
  useEffect(() => {
    getData();
  },[]);
  console.info(items.length);
  const [barangBelanjaan, setBelanjaan] = useState({});
  const handleClick = (data) => {
    let qty = 1;
    if (barangBelanjaan[data.id] != undefined) {
      qty = parseInt(barangBelanjaan[data.id]["jumlah"]) + 1;
    }
    setBelanjaan({
      ...barangBelanjaan,
      [data.id]: {
        name: data.name,
        price: data.price,
        jumlah: qty,
        photo:data.photo
      },
    });
  };
  return (
    <Row>
      <Col lg={8}>
        <Row>
          {items.map((data, index) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              style={{ width: "10rem" }}
              className="col-lg-3 ms-5 mt-3"
              onClick={() => handleClick(items[index])}
            >
              <Image src={Images} alt="Images of food " fluid />
              <Card.Body>
                <Card.Title className="text-center">
                  {items[index]["name"]}
                </Card.Title>
                <Card.Text className={price}>{items[index]["price"]}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Col>
      <Col lg={3}>
        <Row>
          <Card style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Pesanan</Card.Title>
              {Object.keys(barangBelanjaan).map((key) => (
                // eslint-disable-next-line react/jsx-key
                <div className=" d-flex flex-row mt-2">
                  <div className={Style.pesanan}>
                    <img src ={Images} alt="images of food" />
                  </div>
                  <div className="name-food align-self-center ms-3">
                    {barangBelanjaan[key]["name"]}
                  </div>
                  <div className="qty align-self-center ms-5">x
                    {barangBelanjaan[key]["jumlah"]}
                  </div>
                  <div className="price align-self-center ms-3"> {barangBelanjaan[key]["price"]}</div>
                </div>
              ))}
            </Card.Body>
            <Row className={Style.parent}>
              <Col lg={11}>
                <Button variant="outline-danger" className="ms-4">
                  Clear Cart
                </Button>
              </Col>
            </Row>

            <Row>
              <Container>
                <div className="d-flex flex-row justify-content-center mt-3 ">
                  <Col lg={5} className={Style.parent}>
                    <Button variant="outline-success">Save bill</Button>
                  </Col>
                  <Col lg={5} className={Style.parent}>
                    <Button variant="outline-success" className="ms-3">
                      Print Bill
                    </Button>
                  </Col>
                </div>
              </Container>
            </Row>
            <Row className={Style.parent}>
              <Col lg={11}>
                <Button className={Style.charge}>{allCharge(barangBelanjaan)}</Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Trsansactions;
