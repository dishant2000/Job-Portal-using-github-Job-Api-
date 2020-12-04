import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import GapiPhoto from "../Assets/githubjobapi.png";
import GithubJob from "./GithubJob";
function Home() {
  return (
    <div style = {{marginTop : "100px"}}>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} xl={6}>
              <Card style={{ height: "200px" }}>
                <Card.Img variant="top" src={GapiPhoto} />
                <Button variant="primary">
                  <Link to="/githubapi">Go somewhere</Link>
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;
