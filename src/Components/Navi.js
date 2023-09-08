import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navi = () => {
  const cartProducts = useSelector((state) => state.cart);
  const cartItemCount = cartProducts ? cartProducts.length : 0;
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Fashion Nova
          </Navbar.Brand>
          <Nav.Link to="/products" as={Link}>
            Products
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link to="/cart" as={Link}>
              Cart {cartItemCount}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
