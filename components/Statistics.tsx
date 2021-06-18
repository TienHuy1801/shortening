import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import style from '../styles/Statistics.module.css'

export const Statistics = () => {
  return(
    <div className={style.body}>
      <div className={style.content}>
        <h1 className={style.h1}>Advanced Statistics</h1>
        <p className={style.p}>Track how your links are performing across the web </p>
        <p className={style.p}>with our advanced statistics dashboard</p>
      </div>
      <Container>
        <Col sm={12} className={style.row}>
          <div className={style.divider}></div>
          <Card className={style.card}>
            <div className={style.boxImg}><CardImg className={style.img} src="/images/icon-brand-recognition.svg" alt="brand-recognition"/></div>
            <CardBody className={style.cardBody}>
              <CardTitle className={style.title}>Brand Recognition</CardTitle>
              <CardText className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam corporis illum maxime laudantium, optio molestiae quidem ad blanditiis quos iure sit nihil possimus nobis accusamus eos doloremque. Facilis, maxime!</CardText>
            </CardBody>
          </Card>
          <Card className={style.card}>
            <div className={style.boxImg}><CardImg className={style.img} src="/images/icon-detailed-records.svg" alt="icon-detailed-records"/></div>
            <CardBody className={style.cardBody}>
              <CardTitle className={style.title}>Detailed Records</CardTitle>
              <CardText className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam corporis illum maxime laudantium, optio molestiae quidem ad blanditiis quos iure sit nihil possimus nobis accusamus eos doloremque. Facilis, maxime!</CardText>
            </CardBody>
          </Card>
          <Card className={style.card}>
            <div className={style.boxImg}><CardImg className={style.img} src="/images/icon-fully-customizable.svg" alt="fully-customizable"/></div>
            <CardBody className={style.cardBody}>
              <CardTitle className={style.title}>Fully Customizable</CardTitle>
              <CardText className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam corporis illum maxime laudantium, optio molestiae quidem ad blanditiis quos iure sit nihil possimus nobis accusamus eos doloremque. Facilis, maxime!</CardText>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </div>
  );
}