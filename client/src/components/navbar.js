import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Menu() {
  const cartItem = useSelector((state) => {
    return state.counter.cart;
  });
    return (
        <div style={{background:"#F8F9FA"}}>
        
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">Mern Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/cart">Cart{cartItem.length ? <h6>{cartItem.length}</h6> : null}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
      </div>  
      
        
    )
}
