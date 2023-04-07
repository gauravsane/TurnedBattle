import { useTypedMessage2 } from '../hooks2/useTypedMessage2';
import styles from './styles.module.css';

export const BattleAnnouncer2 = ({ message }) => {
  const typedMessage = useTypedMessage2(message);

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};
