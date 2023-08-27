import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/icons/logo.svg";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="navContainer">
      <Navbar bg="transparent" expand="lg" className="big-header">
        <Container fluid className="navMobileFlex">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="options">
            <Nav className="ms-auto my-2 my-lg-0 option" navbarScroll>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                about
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                practice area
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                ESG
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                team
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                resources
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
                className="option-nav"
              >
                contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
