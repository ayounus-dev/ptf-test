import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

function Footer() {
  return (
    <Container bg="dark" variant="dark">
      <Row>
        <Col>
          <div>FOR TALENT</div>
          <ListGroup.Item>
            <a href="">Candidate FAQ </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Create Your Profile</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Live Chats & Videos</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Better Jobs</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">In-Person Events</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Coaching</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Ambassador</a>
          </ListGroup.Item>
        </Col>
        <Col>
          <div>FOR EMPLOYERS</div>
          <ListGroup.Item>
            <a href="">Hire, Brand, Train </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Post Remote Jobs</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Diversity Reboot 2020</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Executive Forum</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Mentorship</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">Employer FAQ</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">What Women Want in 2020</a>
          </ListGroup.Item>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Footer;
