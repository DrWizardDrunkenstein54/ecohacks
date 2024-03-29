import React from "react";

import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";
import FadeIn from "react-fade-in";

function About() {
  return (
    <div className="my-5">
      <section className="mb-3">
        <Container>
          <Card id="information" className="bg-gradient-gray-dark shadow-lg border-0">
            <div className="p-4">
              <a href="mailto:eco.hacks.22@gmail.com" style={{ textDecoration: "none" }}>
                <Row className="align-items-center glass p-3">
                  <Col lg="8">
                    <h3 className="text-white">
                      Join Our Team
                    </h3>
                    <p className="text-font lead text-white mt-3">
                      Want to lead a workshop, be a guest speaker, take on a judge role, or just help out in general? PVSA awards too!
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <div className="btn btn-outline-success">
                      Contact Us
                    </div>
                  </Col>
                </Row>
              </a>
            </div>
          </Card>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Card className="card-profile shadow mt--300">
            <div className="px-4">

              <Row className="justify-content-center text-center mb-4 pt-4">
                <Col lg="8">
                  <h2 className="display-3 title-font" style={{fontSize:"4em"}}>Our Team</h2>
                  
                  <br />
                </Col>
              </Row>
              
              <Row className="mb-5">
                {(() => {
                  let fields = [];
                  let board = [{
                    photo: require("./images/team/brandon-new.png"),
                    name: "Brandon Yan",
                    title: ["Officer"],
                    description: "Lorem Ipsum"
                  }, {
                    photo: require("./images/team/jeffrey-new.png"),
                    name: "Jeffrey Zhang",
                    title: ["Officer"],
                    description: "Lorem Ipsum"
                  }, {
                    photo: require("./images/team/joshua-new.png"),
                    name: "Joshua Diao",
                    title: ["Officer"],
                    description: "Lorem Ipsum"
                  }, {
                    photo: require("./images/team/brian-blur-new.png"),
                    name: "Brian Da Cruz",
                    title: ["Officer"],
                    description: "Lorem Ipsum"
                  }
                  ];
                  for (let arg in board) {
                    fields.push(
                      <Col className="mb-5 mb-5" xl="3" lg="4" md="6" sm="12">
                          <img
                            alt="..."
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={board[arg].photo}
                            style={{ width: "200px", height: "200px", backgroundPosition: "center", objectFit: "cover" }}
                          />
                          <div className="pt-4 flex-grow-1 text-center">
                            <h5 className="title">
                              <span className="d-block mb-1">{board[arg].name}</span>
                              {board[arg].title.map((title) => (
                                <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "4em/4em" }}>
                                {title}
                                </span>
                               ))}
                            </h5>
                            <h7>
                              {/* board[arg].description */}
                            </h7>
                          </div>
                      </Col>
                    )
                  }
                  return (<>{fields}</>);
                })()}
              </Row>

            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}

export default About;