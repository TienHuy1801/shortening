import React from "react";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import style from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.body}>
      <Container >
        <Row>
          <Col sm={4}>
            <span style={{color:"white", fontSize:"40px", fontWeight:"bold"}}>Shortly</span> 
          </Col>
          <Col sm={2}>
            <Nav vertical>
              <NavItem className={style.title} id="features">Features</NavItem>
              <div className={style.divider}></div>
              <NavItem className={style.item}>Link Shortening</NavItem>  
              <NavItem className={style.item}>Branded Links</NavItem>
              <NavItem className={style.item}>Analytics</NavItem>
            </Nav>
          </Col>
          <Col sm={2}>
            <Nav vertical>
              <NavItem className={style.title} id="resources">Resources</NavItem>
              <NavItem className={style.item}>Blog</NavItem>  
              <NavItem className={style.item}>Developers</NavItem>
              <NavItem className={style.item}>Support</NavItem>
            </Nav>
          </Col>
          <Col sm={2}>
            <Nav vertical>
              <NavItem className={style.title} id="company">Company</NavItem>
              <div className={style.divider}></div>
              <NavItem className={style.item}>About</NavItem>  
              <NavItem className={style.item}>Our Team</NavItem>
              <NavItem className={style.item}>Careers</NavItem>
              <NavItem className={style.item}>Contact</NavItem>
            </Nav>
          </Col>

          <Col sm={2}>
            <img className={style.img} src="images/icon-facebook.svg" alt="facebook" />
            <img className={style.img} src="images/icon-twitter.svg" alt="twitter" />
            <img className={style.img} src="images/icon-pinterest.svg" alt="pinterest" />
            <img className={style.img} src="images/icon-instagram.svg" alt="instagram" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}