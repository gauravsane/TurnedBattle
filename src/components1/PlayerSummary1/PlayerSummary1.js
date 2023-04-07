import { Bar1 } from '../Bar1';
import styles from './styles.module.css';

const orange = '#FF6600';
const blue = '#6699CC';

export const PlayerSummary1 = ({ main = false, name, level, health, maxHealth}) => {
    return(
        <div
        style={{ backgroundColor: main ? orange: blue}}
        className={styles.main}>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.level}>Lvl: {level}</div>
            </div>

            <div className={styles.health}>
                <Bar1 label="HP" value={health} maxValue={maxHealth}/>
            </div>
        </div>
    )
}