import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Quote = () => {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col>
            <p style={{fontSize:"2em"}}>
              Skilled.Relevant.<span style={{ color: "orange"}}>Trained.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;
