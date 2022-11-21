import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import logo from "../../images/logo.png";
import infinity from "../../images/infinitiplan.png";
import * as icon from "react-bootstrap-icons";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <img
            src={logo}
            width="150"
            height="70"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form.Control
            type="text"
            placeholder="Search"
            className="class-search mx-4"
          />
        </Navbar.Collapse>
        <Navbar.Brand>
          <img
            src={infinity}
            width="30"
            height="30"            
            className="d-inline-block align-top"
            alt="infinity"
          />
        </Navbar.Brand>
        <icon.Cart size={24} className="class-icons" />
        <Button variant="outline-secondary mx-4">Login</Button>
        <Button variant="warning">Free Signup</Button>        
      </Container>
    </Navbar>
  );
};

export default Header;
