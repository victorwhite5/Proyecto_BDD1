import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const InfoStud=(props)=> {
  return (
    <Container>
      <Row>
        <Card className="w-75 mb-3">
          <Card.Body>
            <Row>
              <h5>{props.nombre}</h5>
            </Row>

            <Row className="row row-cols-2">
              <Col className='d-flex align-items-stretch col-5'>
                <Row className="row row-cols-2 flex-fill">
                  <Col style={{backgroundColor:'#DEC618'}}>
                  </Col>

                  <Col style={{backgroundColor:'#9900FF'}}></Col>
                </Row>
              </Col>

              <Col className="col-6 ms-3">
                <Row className="">
                  <p>{props.record}</p>
                </Row>

                <Row className="d-flex align-items-start">
                  <Link className="btn btn-primary" size="sm" to={`/studs/${props.id}`}>
                    Mas Info
                  </Link>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default InfoStud;
