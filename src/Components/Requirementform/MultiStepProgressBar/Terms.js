import React from 'react'
import Form from 'react-bootstrap/Form';
const Terms = () => {
  return (
    <div>
     <Form>
      <Form.Group className="mb-3" controlId="formGroupTerms">
        <Form.Check label="I authorize Eduonix Solutions Pvt Ltd and its
        representatives to Call,SMS,Email or WhatsApp me for the same.This 
        consent overrides any registration for DNC/NDN" />
      </Form.Group>      
    </Form>
    </div>
  )
}

export default Terms;