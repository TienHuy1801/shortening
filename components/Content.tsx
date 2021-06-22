import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import style from '../styles/Content.module.css';

const scrollToStart = () => {
  document.getElementById("startId").scrollIntoView({
    behavior: 'smooth'
  });
}

export const Content = () => {
  return (
    <Container fluid="md">
      <Row className={style.content}>
        <Col md={{size: 6, order: 2}} sm="12" className={style.img}><img className={style["img-box"]} src="/images/illustration-working.svg" alt="" /></Col>
        <Col md={{size: 6, order: 1}} sm="12" className={style.box}>
          <p className={style["text-title"]}>More than just shorted links</p>
          <p className={style["text-description"]}>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <Button className={style.button} onClick={scrollToStart}>Get Started</Button>
        </Col>
      </Row>
    </Container>  
  );
}