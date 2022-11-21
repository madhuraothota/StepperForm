import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import research from "../../images/research.png";
import email from "../../images/email.png";
import headhunt from "../../images/headhunting.png";
import sendfile from "../../images/send-file.png";
import "./Ourservices.css";

const Ourservices = () => {
  return (
    <div>
      <h2 className="text-center m-5">Services Offered</h2>

      <Container>
        <Row>
          <Col className="m-auto">
            <Card style={{ width: "18rem",height:"25rem" }} className="cardone">
              <Card.Img
                src={research}
                className="d-block mx-auto img-fluid w-50"
              />
              <Card.Body>
                <Card.Title>Trained Freshers/Inter Hiring</Card.Title>
                <Card.Text>
                  Hire young minds with relevant skills.Talent acquisition has
                  never been easier.You can hire trained professionals for the
                  exact skills that matches your requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-auto">
            <Card style={{ width: "18rem",height:"25rem"}} className="cardtwo">
              <Card.Img
                src={email}
                className="d-block mx-auto img-fluid w-50"
              />
              <Card.Body>
                <Card.Title>Database Mailing</Card.Title>
                <Card.Text>
                  Reach out to the right candidate at one go from our extensive
                  Talent pool of over a million Indian candidates.Your set
                  parameters are used to select the best suited candidates thet
                  fits into yout organization.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-auto">
            <Card style={{ width: "18rem",height:"25rem"}} className="cardthree">
              <Card.Img
                src={headhunt}
                className="d-block mx-auto img-fluid w-50"
              />
              <Card.Body>
                <Card.Title>Job Postings</Card.Title>
                <Card.Text>
                  Post your requirements & it will be met.Your search for the
                  best ends here with batches full of relevant & trained
                  freshers/professionals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-auto">
            <Card style={{ width: "18rem",height:"25rem" }} className="cardfour">
              <Card.Img
                src={sendfile}
                className="d-block mx-auto img-fluid w-50"
              />
              <Card.Body>
                <Card.Title>Manage your listings</Card.Title>
                <Card.Text>
                  Save everything recruitement related all in one place so you
                  can pick up where you left off.We cater to your recurring
                  requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ourservices;
