import React from "react";
import Button from "react-bootstrap/Button";
import { Col, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <Jumbotron fluid className="banner">
      <Container className="banner-heading">
        <h1>New Jobs and daily virtual events</h1>
        <h3>Join and Growth with our diverse women-led community</h3>
      </Container>
      <Container className="search-section">
        <Form inline>
          <InputGroup as={Col}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              inline
              placeholder="job title, keyword or company name"
              // size="lg"
            />
          </InputGroup>
          <InputGroup as={Col}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              inline
              placeholder='enter a location or "Remote" to find a remote job'
              //size="lg"
            />
          </InputGroup>
          <Button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
        {/*Styling Unimplemented*/}
        {/*
        <Container>
          <a href="">All Jobs</a>
          <a href="">Engineering</a>
          <a href="">Marketing</a>
          <a href="">Sales</a>
          <a href="">Business Analytics</a>
          <a href="">Project Management</a>
          <a href="">Graphic Design</a>
          <a href="">Remote & Flexible Jobs</a>
          <a href="">Virtual Events</a>
        </Container>*/}
      </Container>
      <Container className="connect-section">
        <p className="heading">Join Us</p>

        <Container>
          <Button className="fb-btn">
            <FontAwesomeIcon icon={faFacebookF} />
            Facebook
          </Button>
          <Button className="linkedin-btn">
            <FontAwesomeIcon icon={faLinkedinIn} />
            LinkedIn
          </Button>
          <Button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} />
            Google
          </Button>
          <Button className="envelop-btn">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </Button>
        </Container>
        <p className="disclaimer">
          By signing up you accept the <a href="">Terms of Service</a> and{" "}
          <a href="">Privacy Policy</a>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Banner;
