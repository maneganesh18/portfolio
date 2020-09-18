import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./contact.css"

//icon

import facebook from "./img/facebook.png";
import github from "./img/github.png";
import gmail from "./img/gmail.png";
import insta from "./img/insta.png";
import linkdin from "./img/linkdin.png";
import twitter from "./img/twitter.png";

const Contact = () => {
  return (
    <Container id="contact" className="cont" fluid={true}>
      <h1 className="textmain pt-3 text-center font-details-b pb-5">CONTACT</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="https://www.facebook.com/ganesh.mane.39982"
                target="_blank"
                // rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="HTML 5"
                  class="image-style m-1 rounded"
                  className="img-icon"

                />
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.instagram.com/__gm8__/    "
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={insta}
                    alt="HTML 5"
                    class="image-style m-1 rounded"
                    className="img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/ganesh-mane-31925b1a9"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={linkdin}
                    alt="HTML 5"
                    class="image-style m-1 rounded"
                    className="img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/GaneshMane1899"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={twitter}
                    alt="HTML 5"
                    class="image-style m-1 rounded"
                    className="img-icon"
                  />
              </a>
            </div>
            <div className="m-2">
              <a
                href="mailto:maneganesh212@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img
                    src={gmail}
                    alt="HTML 5"
                    class="image-style m-1 rounded"
                    className="img-icon"
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
