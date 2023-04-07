import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";


export const EndMenu1 = ({ winner, onStartClick }) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/HomeScreen2`; 
    navigate(path);
  }

  return (
    <div className={styles.main}>
      <h1>{winner.name} has won!</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Play Again
      </button>
      <button className={styles.startButton} onClick={routeChange}>Jonin Mode</button>
    </div>
  );
};
