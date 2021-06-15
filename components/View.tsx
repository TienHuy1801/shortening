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
                      <Col sm="7" style={{marginLeft:"10px"}}>{item.long}</Col>
                      <Col sm="3" style={{float:"right"}}><a href={item.short}>{item.short}</a></Col>
                      <Col sm="1"></Col>
                      <Col sm="1" style={{marginLeft:"-10px"}}>
                          <Button className={style.button} color="primary" onClick={() => {copy(`${item.short}`)}}>Copy</Button>
                      </Col>
                  </Row>
                </div>
              )
            })
          }
        </Container>
      </div>
    );
  } else {
    return(
      <div style={{textAlign:"center"}}>
        <Spinner color="primary" children=""/>
      </div>
    );
  }
}