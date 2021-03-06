import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";

const Home = () => {
  return (
    <div className="App">
      <Container>
        <Row className="App-header">
          <Col>
            <h1>La oss kode!</h1>
          </Col>
        </Row>
        <Row className="App-buttons">
          <Col xs lg="3">
            <Link to={ROUTES.STUDENT} style={{ textDecoration: "none" }}>
              <Button
                className="btn-class"
                variant="outline-light"
                size="lg"
                block
              >
                Jeg er en elev!
              </Button>
            </Link>
          </Col>
          <Col xs lg="3">
            <Link to={ROUTES.TEACHER} style={{ textDecoration: "none" }}>
              <Button
                className="btn-orange"
                variant="outline-light"
                size="lg"
                block
              >
                Jeg er en lærer!
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
