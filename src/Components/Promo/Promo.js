import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bgimg from "../../images/BackgroundColor.png";
import img1 from "../../images/img1.svg";

const Promo = () => {
  return (
    <div
    style={{backgroundImage:`url(${bgimg})`}}
    >
      <Container className="class-promo">
        <Row>
          <Col>
            <span style={{ color: "orange", fontSize: "4em" }}>
              Hire Trained{" "}
            </span>
            <span style={{ color: "white", fontSize: "4em" }}>Freshers</span>
            <br />
            <span style={{color:"white",fontSize:"4em"}}>& Professionals from the get go</span>
            <br/>
            <span style={{color:"white",fontSize:"1.5rem"}}>Reduce the cost & time for hiring by 80%</span>
          </Col>
          <Col>
            <img
              src={img1}
              className="img-fluid"
              alt="img"
              style={{ marginLeft: "2rem" }}
            />
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Promo;
