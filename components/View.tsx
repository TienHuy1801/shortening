import React from 'react';
import copy from 'copy-to-clipboard';
import { Container, Button, Col, Row, Spinner } from 'reactstrap';
import { useAppSelector } from '../store/hook';
import style from '../styles/View.module.css';

export const View = () => {
  const link = useAppSelector(state => state.link);
  if (!link.isLoading) {
    return(
      <div className={style.view}>
        <Container >
          {
            link.data.map((item, index) => {
              return (
                <div className={style.box}>
                  <Row key={index} className={style.row}>
                      <Col md="7" sm="12">{item.long}</Col>
                      <Col md="3" sm="12" className={style.short}><a href={item.short}>{item.short}</a></Col>
                      <Col md={{ size:1, offset:1 }} sm="12">
                          <Button className={style.button} color="primary" onClick={() => {copy(`${item.short}`)}}>Copy</Button>
                      </Col>
                  </Row>
                  <div className={style.divider}></div>
                </div>
              )
            })
          }
        </Container>
      </div>
    );
  } else {
    return(
      <div className={style.view}>
        <Container style={{textAlign:"center"}}>
          <Spinner color="primary" children=""/>
        </Container>
      </div>
    );
  }
}