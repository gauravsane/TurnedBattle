import styles from './styles.module.css';

export const BattleMenu1 = ({ onAttack, onMagic, onNeedle, onHeal }) => (
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
      Altra Big Ball Rasengan
    </div>
    <div onClick={onMagic} className={styles.option}>
      Sage Art
    </div>
    <div onClick={onNeedle} className={styles.option}>
      Needle attack
    </div>
    <div onClick={onHeal} className={styles.option}>
    Heal
    </div>
  </div>
);
