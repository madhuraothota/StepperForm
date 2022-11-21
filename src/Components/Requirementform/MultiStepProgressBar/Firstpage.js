import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Firstpage = () => {
  
  const submitFormData = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name*</Form.Label>
            <Form.Control type="name" placeholder="Enter first name"
           />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control type="name" placeholder="Enter last name" 
              
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDesignation">
          <Form.Label>Designation*</Form.Label>
          <Form.Control placeholder="Eg. HR head"  
              
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCompany">
          <Form.Label>Company*</Form.Label>
          <Form.Control placeholder="Enter company name" 
           
           />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWorkEmail">
            <Form.Label>Work Email*</Form.Label>
            <Form.Control type="name" placeholder="Enter email" 
             
             />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWorkPhoneNumber">
            <Form.Label>Work Phone Number*</Form.Label>
            <Form.Control type="name" placeholder="Enter phone number" 
                    
             />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default Firstpage;
