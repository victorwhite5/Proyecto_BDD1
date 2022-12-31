import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import foto from "../../assets/caballo1.jpg";

const InfoEjemplar1 = (props) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Card className="w-75 mb-3">
          <Card.Body>
            <Row>
              <h5>{props.nombre}</h5>
            </Row>

            <Row className="row row-cols-2">
              <Col>
                <img src={foto} width={115} height={115} className='ms-3'></img>
              </Col>

              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default InfoEjemplar1;
