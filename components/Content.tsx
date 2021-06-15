import { Button } from 'reactstrap';
import style from '../styles/Content.module.css';

const scrollToStart = () => {
  document.getElementById("startId").scrollIntoView({
      behavior: 'smooth'
  });
}

export const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.box}>
        <div className={style["box-content"]}>
          <p className={style.textB}>More than just shorted links</p>
          <p className={style.textS}>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <Button className={style.button} onClick={scrollToStart}>Get Started</Button>
        </div>
      </div>
      <img src="/images/illustration-working.svg" alt="" />
    </div>  
  );
}