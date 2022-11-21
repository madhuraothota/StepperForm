import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Upload from "./Upload";
import Recapture from "./Recapture";
import Terms from "./Terms";


const Thirdpage = () => {
  const submitFormData = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Location*</Form.Label>
            <Form.Control type="name" placeholder="Select type" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTimeline">
            <Form.Label>Timeline(in days)</Form.Label>
            <Form.Control type="name" placeholder="Enter the timeline" />
          </Form.Group>
        </Row>
        <Row>
          <Upload/>
        </Row>
        <Row>
          <Recapture/>
        </Row>
        <Row>
          <Terms/>
        </Row>
      </Form>
    </div>
  );
};

export default Thirdpage;
