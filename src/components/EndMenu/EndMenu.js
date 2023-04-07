import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";


export const EndMenu = ({ winner, onStartClick, highScore}) => {
  let navigate = useNavigate(); 
  const routeChange1 = () =>{ 
    let path = `/HomeScreen`; 
    navigate(path);
  }

  return (
    <div className={styles.main}>
      <h1>{winner.name} has won!</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Play Again
      </button>
      <button className={styles.startButton} onClick={routeChange1}>Chunin Mode</button>

      {localStorage.getItem("highScore") && (
            <div className="high-score">
              <h5 className="bold">{winner.name} SCORE: 100pt </h5>
              {highScore}
            </div>
          )}
    </div>
  )};
