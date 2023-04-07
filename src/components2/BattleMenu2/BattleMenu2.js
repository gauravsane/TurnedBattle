import styles from './styles.module.css';

export const BattleMenu2 = ({ onNeedle, onSageArt, onHeal, onRasengan,onFireOil}) => (
  <div className={styles.main}>
    <div onClick={onNeedle} className={styles.option}>
      Needle jizo
    </div>
    <div onClick={onSageArt} className={styles.option}>
      Sage Art Goemon
    </div>
    <div onClick={onRasengan} className={styles.option}>
      Altra Big Ball Rasengan
    </div>
    <div onClick={onFireOil} className={styles.option}>
      Toad Oil Fireball
    </div>
    <div onClick={onHeal} className={styles.option}>
      Heal
    </div>
  </div>
);
