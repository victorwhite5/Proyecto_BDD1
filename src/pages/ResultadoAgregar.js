import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardEjemplarResultado from "../componentes/eventos/CardEjemplarResultado";

const ResultadoAgregar = (props) => {
  const location = useLocation();
  const {
    props: { id, fecha },
  } = location.state;

  const ejemplares = [
    {
      id: "1",
      nombre: "Black Mamba",
    },
    {
      id: "2",
      nombre: "Black Mamba",
    },
    {
      id: "3",
      nombre: "Black Mamba",
    },
    {
      id: "4",
      nombre: "Black Mamba",
    },
    {
      id: "5",
      nombre: "Black Mamba",
    },
    {
      id: "6",
      nombre: "Black Mamba",
    },
    {
      id: "7",
      nombre: "Black Mamba",
    },
    {
      id: "8",
      nombre: "Black Mamba",
    },
    {
      id: "9",
      nombre: "Black Mamba",
    },
    {
      id: "10",
      nombre: "Black Mamba",
    },
    {
      id: "11",
      nombre: "Black Mamba",
    },
    {
      id: "12",
      nombre: "Black Mamba",
    },
    /*{
      id: "13",
      nombre: "Black Mamba",
    },
    {
      id: "14",
      nombre: "Black Mamba",
    },
    {
      id: "15",
      nombre: "Black Mamba",
    },
    {
      id: "16",
      nombre: "Black Mamba",
    },*/
  ];

  let content = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content = [...content, <option value={index + 1}>{index + 1}</option>];
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("entro");
    console.log(document.getElementById(12).value);
  };
  return (
    <Container>
      <Form id="form">
        <Row className="text-center">
          <h1>AGREGAR RESULTADO</h1>
        </Row>

        <Row>
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>EJEMPLARES PARTICIPANTES</h3>
                </Row>

                <Row className="row row-cols-4">
                  {ejemplares.map((x) => (
                    <Col className="mb-3">
                      <Row className="row row-cols-2 d-flex">
                        <Col className="col-10">
                          <CardEjemplarResultado
                            key={x.id}
                            id={x.id}
                            nombre={x.nombre}
                          ></CardEjemplarResultado>
                        </Col>
                        <Col className="col-2 d-flex justify-content-end">
                          <select id={x.id}>{content}</select>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>CLASIFICACION</h3>
                </Row>

                <Row>
                  <div className="card-group">
                    <Col style={{ width: "60px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Pos</h6>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "310px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Diferencias</h6>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "398px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Speed Ratings</h6>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "398px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Parciales</h6>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Button onClick={formSubmissionHandler}>Submit</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ResultadoAgregar;
