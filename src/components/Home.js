import React from "react";
import { useEffect,useState } from "react";
import { Link} from "react-router-dom";
import styles from "./Home.module.css";
import { StartMenu } from "./startmenu";
import { Battle } from "./Battle";
import {EndMenu} from "./EndMenu/";
import sound from "../sound/MainTheme.mp3";

function Home(props) {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  function play() {
    new Audio(sound).play()
  }

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div>

    <header className={styles.welcome}>

      <h2>{props.name ? `Welcome - ${props.name}`:" "}</h2>
      <h2 className={styles.link}><Link to="./login">Logout</Link></h2>

      <div className={styles.list}>
        <img onClick={play} className={styles.sound}
        src='/assets/sound on.png' 
        alt="sound on icon" width="30px" 
        height="40px"
        ></img>
        <h3><a href="http://localhost:3000/" className={styles.mode1}>Genin Mode</a></h3>
        <h3><Link to="./HomeScreen" className={styles.mode1}>Chunin Mode</Link></h3>
        <h3><Link to="/HomeScreen2" className={styles.mode1}>Jonin Mode</Link></h3>
        <h3><Link to="/MemoryGame" className={styles.mode1}>Memory Game</Link></h3>
      </div>
    </header>

  
    <div className={styles.main}>
      {mode === 'start' && <StartMenu onStartClick={() => setMode('battle')}/>}

      {mode === 'battle' && <Battle
      onGameEnd={winner => {
        setWinner(winner);
        setMode('gameOver');
      }}/>}

      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}

    </div>
  </div>
  );
}

export default Home;