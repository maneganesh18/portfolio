import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./project.css";

//project ss
import portfolio from "./img/portfolio.png";
import todo from "./img/todo.png";
import voice from "./img/voice.png";
import zoom from "./img/zoom.png";
import weather1 from "./img/weather1.jpg";


//icons
import bootstrap from "./img/techimg/bootstrap.png";
import html from "./img/techimg/html.png";
import react from "./img/techimg/react.png";
import js from "./img/techimg/js.png";
import node from "./img/techimg/node.png";
import socket from "./img/techimg/socket.png";

const Project = () => {
  return (
    <Container className="maincont" id="project" fluid={true}>
      {/* //main heading */}
      <Row className="mt-5 mb-5  justify-content-center">
        <p className="mainheading">CHECK OUT SOME OF MY WORK.</p>
      </Row>
      {/* 1st zoom clone */}
      <Row className="mt-5 mb-4 zoom justify-content-center">
          
            <Card className="fircard" style={{}}>
              <Card.Img variant="top" src={zoom} />
              <Card.Body>
                <Card.Title className="proheading">Zoom Meeting Clone</Card.Title>
                <Accordion>
                  <Card>
                    <Card.Header className="extendbutton">
                      <Accordion.Toggle as={Button} variant="" eventKey="0">
                        <Button
                          className="btnexpand"
                          variant="success"
                          size="lg"
                          block
                        >
                          Project Details
                        </Button>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Card.Title>Discription :</Card.Title>
                        <Card.Text>
                          An application which is used to make real time video call and real time chat which is done by using Nodejs, Socket.io, PeerJs
                        </Card.Text>
                        <Card.Title className="pb-2">Tech Used :</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>
                              <span class="p-2">
                                <img
                                  src={html}
                                  alt="HTML 5"
                                  class="image-style m-1 rounded"
                                />
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span class="p-2">
                                <img
                                  src={bootstrap}
                                  alt="bootstrap"
                                  class="image-style m-1 rounded"
                                  size="1vw"
                                />
                                BOOTSTRAP
                              </span>
                            </li>
                            <li>
                              <span class="p-2">
                                <img
                                  src={node}
                                  alt="node"
                                  class="image-style m-1 rounded"
                                />
                                NodeJS
                              </span>
                            </li>
                            <li>
                              <span class="p-2">
                                <img
                                  src={socket}
                                  alt="socket"
                                  class="image-style m-1 rounded"
                                />
                                Socket.io
                              </span>
                            </li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
         
        </Row>
      <Row className="mt-5  justify-content-center">
        {/* 2st card portfolio */}
        <Col className="procard mb-5" sm>
          <Card className="fircard" style={{}}>
            <Card.Img variant="top" src={portfolio} />
            <Card.Body>
              <Card.Title className="proheading">Portfolio</Card.Title>
              <Accordion>
                <Card>
                  <Card.Header className="extendbutton">
                    <Accordion.Toggle as={Button} variant="" eventKey="0">
                      <Button
                        className="btnexpand"
                        variant="success"
                        size="lg"
                        block
                      >
                        Project Details
                      </Button>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Title>Discription :</Card.Title>
                      <Card.Text>
                        This is my portfolio website using ReactJS
                      </Card.Text>
                      <Card.Title className="pb-2">Tech Used :</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <span class="p-2">
                              <img
                                src={html}
                                alt="HTML 5"
                                class="image-style m-1 rounded"
                              />
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={bootstrap}
                                alt="bootstrap"
                                class="image-style m-1 rounded"
                                size="1vw"
                              />
                              BOOTSTRAP
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={react}
                                alt="React"
                                class="image-style m-1 rounded"
                              />
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        {/* 3nd todo */}
        <Col className="procard mb-5 " sm>
          <Card className="fircard" style={{}}>
            <Card.Img variant="top" src={todo} />
            <Card.Body>
              <Card.Title className="proheading">TODO-Application</Card.Title>

              <Accordion>
                <Card>
                  <Card.Header className="extendbutton">
                    <Accordion.Toggle as={Button} variant="" eventKey="0">
                      <Button
                        className="btnexpand"
                        variant="success"
                        size="lg"
                        block
                      >
                        Project Details
                      </Button>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Title>Discription</Card.Title>
                      <Card.Text>
                        An application which handle todo list of day to day life
                        which done by using ReactJS
                      </Card.Text>
                      <Card.Title>Tech used</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <span class="p-2">
                              <img
                                src={html}
                                alt="HTML 5"
                                class="image-style m-1 rounded"
                              />
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={bootstrap}
                                alt="Bootstrap"
                                class="image-style m-1 rounded"
                              />
                              BOOTSTRAP
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={react}
                                alt="React"
                                class="image-style m-1 rounded"
                              />
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="secrow  mt-5  justify-content-center">
        {/* 4rd voice */}
        <Col className="procard mb-5" sm>
          <Card className="fircard" style={{}}>
            <Card.Img variant="top" src={voice} />
            <Card.Body>
              <Card.Title className="proheading">Voice Recognition</Card.Title>
              <Accordion>
                <Card>
                  <Card.Header className="extendbutton">
                    <Accordion.Toggle as={Button} variant="" eventKey="0">
                      <Button
                        className="btnexpand"
                        variant="success"
                        size="lg"
                        block
                      >
                        Project Details
                      </Button>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Title>Discription</Card.Title>
                      <Card.Text>
                        An application which convert voice into text which is
                        made by using JavaScript
                      </Card.Text>
                      <Card.Title>Tech Used</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <span class="p-2">
                              <img
                                src={html}
                                alt="HTML 5"
                                class="image-style m-1 rounded"
                              />
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={bootstrap}
                                alt="Bootstrap"
                                class="image-style m-1 rounded"
                              />
                              BOOTSTRAP
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={js}
                                alt="JavaScript"
                                class="image-style m-1 rounded"
                              />
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        {/* 5th weather1 */}
        <Col className="procard mb-5 " sm>
          <Card className="fircard" style={{}}>
            <Card.Img variant="top" src={weather1} />
            <Card.Body>
              <Card.Title className="proheading">
                Weather-Application
              </Card.Title>
              <Accordion>
                <Card>
                  <Card.Header className="extendbutton">
                    <Accordion.Toggle as={Button} variant="" eventKey="0">
                      <Button
                        className="btnexpand"
                        variant="success"
                        size="lg"
                        block
                      >
                        Project Details
                      </Button>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Title>Discription</Card.Title>
                      <Card.Text>
                        An application which tells real time temperature of any
                        city in world which made by using ReactJS
                      </Card.Text>
                      <Card.Title>Tech Used</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <span class="p-2">
                              <img
                                src={html}
                                alt="HTML 5"
                                class="image-style m-1 rounded"
                              />
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={bootstrap}
                                alt="Bootstrap"
                                class="image-style m-1 rounded"
                              />
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span class="p-2">
                              <img
                                src={react}
                                alt="React"
                                class="image-style   m-1 rounded"
                              />
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;

//  {/* <Col className="mb-5  procard " sm>
//           <Card className="seccard" style={{ width: "18rem" }}>
//             <Card.Img className="cardimg" variant="top" src={portfolio} />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className=" mb-5  justify-content-center">
//         <Col className="mb-5 procard" sm>
//           <Card className="fircard" style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={portfolio} />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col className="procard mb-5" sm>
//           <Card className="seccard" style={{ width: "18rem" }}>
//             <Card.Img className="cardimg" variant="top" src={portfolio} />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col> */}
