import React from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

function App() {
  return (
    <Container>
      <Row>
        <Menu />
        <Col className="login-form theme">
          <LeftSide />
        </Col>
        <Col className="picture">
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
