import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./logo.png";
import "./Navigation.css";

import { NavLink, Link } from "react-router-dom";

const Navigation = ({ handleAlert }) => {
  const [changeClass, setChangeClass] = useState(false);
  document.addEventListener("scroll", (e) => scrollNav(e));

  function scrollNav(e) {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 120) setChangeClass(true);
    else if (scrollTop < 120) setChangeClass(false);
  }

  return (
    <Navbar expand="md" className={changeClass ? "navb filled" : "navb"} fixed="top">
      <Container>
        <a href="#personal-page">
          <Navbar.Brand>
            <img alt="logo" src={logo} width="40" height="40" className="d-inline-block align-top" />
          </Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a href="#about" exact>
              <p>About</p>
            </a>
            <a href="#skills" exact>
              <p>Skills</p>
            </a>
            <a href="#portfolio">
              <p as="span">Portfolio</p>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
