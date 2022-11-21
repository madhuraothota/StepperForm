import React from "react";
import { Container ,Row,Col } from "react-bootstrap";
import Services from "./Services/Services";
import MultiStepProgressBar from './MultiStepProgressBar/MultiStepProgressBar';
const Requirementform = () => {


  return (
    <Container>
      <Row>
        <Col>
          <Services/>
        </Col>
        <Col>
          <MultiStepProgressBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Requirementform;
