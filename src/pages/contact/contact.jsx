import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./contact.css"

//icon

import facebook from "./img/facebook.png";
import gmail from "./img/gmail.png";
import insta from "./img/insta.png";
import linkdin from "./img/linkdin.png";
import twitter from "./img/twitter.png";

const Contact = (props) => {
  return (
    <Container id="contact" className="cont" fluid={true}>
      <h1 className="textmain pt-3 text-center font-details-b pb-5">CONTACT</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href={props.state.links.facebook}
                target="_blank"
                // rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="HTML 5"
                  className="image-style m-1 rounded img-icon"
                />
              </a>
            </div>
            <div className="m-2">
              <a
                href={props.state.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={insta}
                    alt="HTML 5"
                    className="image-style m-1 rounded img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href={props.state.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={linkdin}
                    alt="HTML 5"
                    className="image-style m-1 rounded img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href={props.state.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={twitter}
                    alt="HTML 5"
                    className="image-style m-1 rounded img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href={props.state.links.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={gmail}
                    alt="HTML 5"
                    className="image-style m-1 rounded img-icon"
                  />
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Contact;
