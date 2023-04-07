import { useTypedMessage1 } from '../Hooks1';
import styles from './styles.module.css';

export const BattleAnnouncer1 = ({ message }) => {
  const typedMessage = useTypedMessage1(message);

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};
