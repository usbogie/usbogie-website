import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class MainNav extends React.Component {
  render() {
    return (
      <div className="MainNav">
        <Navbar bg="light" expand="md" className="justify-content-end px-3">
          <LinkContainer to="/">
            <Navbar.Brand>Usbogie's Website</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/" className="justify-content-end" style={{ width: "100%" }}>
              <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/demo"><Nav.Link>Demo</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
