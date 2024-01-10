import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

function BlogNav() {
  return (
    <div>
      <Navbar style={{ background: "#ffb703" }}>
        <img src="p ico.ico" height="35" alt="" loading="lazy" />
        <Navbar.Brand
          href="#home"
          style={{ color: "white", marginLeft: "10px" }}
        >
          Parv gugnani
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Javascript
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              Data Structure
            </Nav.Link>
            <Nav.Link href="#services" style={{ color: "white" }}>
              Algorithm
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "white" }}>
              Computer Services
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="search" className="ml-auto" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BlogNav;
