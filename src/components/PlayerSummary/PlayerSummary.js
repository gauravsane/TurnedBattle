import { Bar } from '../Bar';
import styles from './styles.module.css';

const orange = '#FF6600';
const brown = '#C19A6B';

export const PlayerSummary = ({ main = false, name, level, health, maxHealth}) => {
    return(
        <div
        style={{ backgroundColor: main ? orange: brown}}
        className={styles.main}>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.level}>Lvl: {level}</div>
            </div>

            <div className={styles.health}>
                <Bar label="HP" value={health} maxValue={maxHealth}/>
            </div>
        </div>
    )
}