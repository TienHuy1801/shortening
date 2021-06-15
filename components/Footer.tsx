import style from '../styles/Footer.module.css';

const scrollToStart = () => {
  document.getElementById("startId").scrollIntoView({
      behavior: 'smooth'
  });
}

export const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.box}>
          <p className={style.text}>Boots your links today</p>
          <button className={style.button} onClick={scrollToStart}>Get Started</button>
        </div>
      </div>
    </>
  );
}