import React, { useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import style from '../styles/Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
  <Container>
    <Navbar color="light" light expand="md" className={style.header}>
      <NavbarBrand href="/" className="mr-auto">
        <img src="/images/logo.svg" alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={isOpen} navbar style={{justifyContent: "space-between"}}>
        <Nav navbar>
          <NavItem>
            <NavLink className={style.link} href="/">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.link} href="/">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.link} href="/">Resources</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            <NavLink className={style.link} href="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.signUp} href="/">
              Sign up
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      
    </Navbar>
  </Container>
  );
}