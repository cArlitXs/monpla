import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </div>
  );
};

export default Header;
