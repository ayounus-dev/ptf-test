import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../Images/svg/logo.svg";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="ptf-navbar">
      <Navbar.Brand href="#home">
        <img alt="" src={logo} className="ptf-logo" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapsible" />
      <Navbar.Collapse id="navbar-collapsible">
        <Nav className="mr-auto">
          <Nav.Link href="#jobs">Jobs</Nav.Link>
          <Nav.Link href="#companies">Companies</Nav.Link>

          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action">Virtual Events</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">Virtual Job Fair</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">
              Diversity Reboot Summit 2021
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">
              Diversity Reboot Summit 2020
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">
              Allyship To Impact
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Career Growth" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action">Mentorship</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">Coaching</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="For Employers" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action">
              Hire, Brand, Train
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">Post Remote Jobs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">
              Allyship To Impact
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">
              Diversity Reboot Summit
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">Executive Forum</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action">Mentorship</NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-dark">Join Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
