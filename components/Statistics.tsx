import { Card } from 'reactstrap';
import style from '../styles/Statistics.module.css'

export const Statistics = () => {
  return(
    <div className={style.body}>
      <div className={style.content}>
        <h1 className={style.h1}>Advanced Statistics</h1>
        <p className={style.p}>Track how your links are performing across the web </p>
        <p className={style.p}>with our advanced statistics dashboard</p>
      </div>
      <div>
        <Card>

        </Card>
      </div>
    </div>
  );
}