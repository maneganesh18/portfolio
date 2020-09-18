import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./skills.css";
import react from "./img/react.png";
import javascript from "./img/javascript.svg";
import angular1 from "./img/angular1.png";
import node from "./img/node.png";
import python from "./img/python.png";
import sql from "./img/sql.png";

const Skill = () => {
  return (
    <div>
      <Container className="skilmain " id="skill" fluid={true}>
        <Row className="mt-5 mb-5 justify-content-center">
          <h1 className="headtext">TECH SKILLS</h1>
        </Row>
        <Row className="mt-5  pt-5" >
          <Col  sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="react"
                src={react}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">React JS</p>
            </Row>
          </Col>
          <Col  sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="javascript"
                src={javascript}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">Javascript</p>
            </Row>
          </Col >
          <Col  sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="angular"
                src={angular1}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">Angular</p>
            </Row>
          </Col>
        </Row>
        <Row  >
          <Col sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="node"
                src={node}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">Node.js</p>
            </Row>
          </Col>
          <Col sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="python"
                src={python}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">Python</p>
            </Row>
          </Col>
          <Col sm>
            <Row className="mt-3 mb-3 justify-content-center">
              <Image
                className=" ico justify-content-center"
                alt="sql"
                src={sql}
                fluid
              />
            </Row>
            <Row className="mt-3 mb-3 justify-content-center">
              <p className="headline">My-SQL</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
