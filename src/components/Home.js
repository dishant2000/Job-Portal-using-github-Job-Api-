import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link,useHistory } from "react-router-dom";
import GapiPhoto from "../Assets/githubjobapi.png";

import GithubJob from "./GithubJob";
function Home() {
  const history = useHistory();
  return (
    <div style = {{marginTop : "100px"}}>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} xl={6}>
              <Card style={{ height: "200px" }}>
                <Card.Img style = {{cursor : "pointer"}} variant="top" src={GapiPhoto} onClick = {()=>{history.push('/')}}/>
                <Button varient = "Primary" onClick = {()=>{history.push('/githubapi')}} >
                  Go somewhere
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;
