import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const img = "https://smdigital.com.co/wp-content/uploads/2017/03/CasoRedbull_1.png";
      return (
          <Navbar bg="dark" expand="lg" className="shadow-lg" variant="dark">
          <div className="container-fluid">
              <div className="d-block d-lg-none">
              <Link to={"/"}>
                  <Navbar.Brand>
                  <img src={img} alt="Logo" className="d-inline-block align-text-top logo-header"/>
                  </Navbar.Brand>
              </Link>
              </div>
              <div className="d-none d-lg-block">
                  <Link to={"/"}>
                  <Navbar.Brand>
                      <img src={img} alt="Logo" className="d-inline-block align-text-top logo-header"/>
                  </Navbar.Brand>
                  </Link>
              </div>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mx-auto mb-2 mb-lg-0">
                  <Nav.Link as={NavLink} to={"/"} className="mx-4 nav-link-bold"> Inicio </Nav.Link>
                  <Nav.Link as={NavLink} to={"/categoria/1"} className="mx-4 nav-link-bold"> Precios bajos </Nav.Link>
                  <Nav.Link as={NavLink} to={"/categoria/2"} className="mx-4 nav-link-bold"> Precios altos </Nav.Link>
                  <Nav.Link as={NavLink} to={"/categoria/3"} className="mx-4 nav-link-bold"> Precios limitada </Nav.Link>
                  <li className="nav-item mx-5">
                     <Link to={"/carrito"}>
                        <CartWidget />
                     </Link>
                  </li>
              </Nav>
              </Navbar.Collapse>
          </div>
          </Navbar>
      );
};

export default NavBar;