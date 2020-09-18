import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./about.css";
import my from "./img/my.jpeg";

const About = () => {
  return (
    <Container className="abo-main" id="about" fluid={true}>
      <h1 className="pt-5 text-center font-details pb-3 heade">ABOUT ME</h1>
      <Row className="pt-3 pb-5 align-items-center">
        <Col xs={12} md={6}>
          <Row className="justify-content-center mb-2 mr-2 ">
            <Image
              className="profile justify-content-end border border-10 border-dark"
              alt="profile"
              src={my}
              roundedCircle
              fluid
            />
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row className=" align-items-start p-2 my-details rounded">
            Hi there! I am <strong>&nbsp;Ganesh Limbaji Mane</strong>
            <br />A passionate programmer born and brought up in India. Highly
            motivated and creative drive to software development.
            <br />
            Skilled in well designed, testable and efficient code writting in
            various languages.
            <br />
            Specialize in thinking outside the box to find unique solutions to
            difficult engineering problems with a belief that every problem has
            a solution.
            <br /> <br />
            <Col className="d-flex justify-content-center flex-wrap">
             
              <div>
                <a
                  href="https://drive.google.com/file/d/1EPQrCq_c_AzgLpRldRuLm5f6fIH3x0--/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" size="lg" variant="outline-dark">
                    Download Resume
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
