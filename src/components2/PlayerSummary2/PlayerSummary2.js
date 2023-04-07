import styles from './styles.module.css';
import { Bar2 } from '../Bar2/Bar2';

const red = '#981003';
const green = '#d7d370';

export const PlayerSummary2 =({ main = false, name, level, health, maxHealth }) => {
    return(
        <div
        style={{background: main ? red : green}}
        className={styles.main}
        >
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.level}>Lvl: {level}</div>
          </div>

          <div className={styles.health}>
            <Bar2 label="HP" value={health} maxValue={maxHealth}/>
          </div>
        </div>
    )
}