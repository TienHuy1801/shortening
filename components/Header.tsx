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
      <Collapse isOpen={isOpen} navbar className={style.collapse}>
        <Nav navbar className={style.nav}>
          <NavItem>
            <NavLink className={style.link} href="#features">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.link} href="#resources">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={style.link} href="#company">Resources</NavLink>
          </NavItem>
        </Nav>
        <div className={style.divider}></div>
        <Nav navbar className={style.nav}>
          <NavItem>
            <NavLink className={style.link} href="/">Login</NavLink>
          </NavItem>
          <NavItem className={style.button}>
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