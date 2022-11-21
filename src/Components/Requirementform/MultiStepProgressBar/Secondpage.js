import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import './Secondpage.css';

const Secondpage = () => {
  const submitFormData = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3" controlId="formGridRole">
          <Form.Label>Role You Are Hiring For*</Form.Label>
          <Form.Control placeholder="Enter the role" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompensation">
            <Form.Label>Compensation in LPA*</Form.Label>
            <Form.Control /> - <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridExperience">
            <Form.Label>Years of Experience*</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Select required exp.</option>
              <option>1</option>
              <option>2</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridOnsiteRemote">
            <Form.Label>Onsite/Remote*</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Select any</option>
              <option>Onsite</option>
              <option>Remote</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWorkNumberofpositions">
            <Form.Label>Number of positions*</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter the num. of positions"
            />
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} controlId="formGridJobtype">
        <Form.Label>Job Type*</Form.Label>
          <Stack direction="horizontal" gap={3}>
          <Button variant="outline-secondary" className="class-job">+ Full-time</Button>{' '}
          <Button variant="outline-secondary" className="class-job">+ Part-time</Button>{' '}
          <Button variant="outline-secondary" className="class-job">+ Internship</Button>{' '}
          <Button variant="outline-secondary" className="class-job">+ Freelance</Button>{' '}         
          </Stack>          
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default Secondpage;
