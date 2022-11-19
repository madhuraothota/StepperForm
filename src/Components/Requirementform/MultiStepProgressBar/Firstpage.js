import React,{useContext} from "react";
import FormContext from "../../../formcontext/form.context";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Firstpage = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    designation,
    setDesignation,
    company,
    setCompany,
    workEmail,
    setWorkEmail,
    workPhoneNumber,
    setWorkPhoneNumber
  } = useContext(FormContext);

  const submitFormData = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name*</Form.Label>
            <Form.Control type="name" placeholder="Enter first name" value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control type="name" placeholder="Enter last name"  value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDesignation">
          <Form.Label>Designation*</Form.Label>
          <Form.Control placeholder="Eg. HR head"  value={designation}
            onChange = {(e) => {
              setDesignation(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCompany">
          <Form.Label>Company*</Form.Label>
          <Form.Control placeholder="Enter company name" value={company}
            onChange ={ (e)=> {
              setCompany(e.target.value);
            }}
           />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWorkEmail">
            <Form.Label>Work Email*</Form.Label>
            <Form.Control type="name" placeholder="Enter email" value={workEmail}
              onChange = { (e) => {
                setWorkEmail(e.target.value);
              }}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWorkPhoneNumber">
            <Form.Label>Work Phone Number*</Form.Label>
            <Form.Control type="name" placeholder="Enter phone number" value={workPhoneNumber}
            onChange = { (e) => {
              setWorkPhoneNumber(e.target.value);
            }}
             />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default Firstpage;
