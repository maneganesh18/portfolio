import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./about.css";
import my from "./img/my.jpeg";

const About = (props) => {
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
            Hi there! I am{" "}
            <strong>
              &nbsp;{props.state.name.firstname} {props.state.name.middlename}{" "}
              {props.state.name.lastname}
            </strong>
            <br /> A passionate technocrat seeking opportunity to utilise my
            technology and leadership skills in an esteemed organization.
            <br />
            A quick learning skill and adaptive nature made me proficient in
            programming languages like ReatJs & JavaScript etc and hunger to
            learn is still in progress.
            <br />
            Proactive,quick decision making & good problem solving abilities are my key
            strengths.
            <br /> <br />
            <Col className="d-flex justify-content-center flex-wrap">
              <div>
                <a
                  href={props.state.links.resume}
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
