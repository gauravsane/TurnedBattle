import styles from './styles.module.css';


export const BattleMenu = ({ onAttack, onRasengan, onClone }) => (

  
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
    Toad Oil Fireball
    </div>
    <div onClick={onRasengan} className={styles.option}>
      Rasengan
    </div>
    <div onClick={onClone} className={styles.option}>
      Sage Art Goemon
    </div>
  </div>
);

