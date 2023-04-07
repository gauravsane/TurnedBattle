import { useState } from "react";
import { Battle1 } from "../Battle1";
import { StartMenu1 } from "../StartMenu1/StartMenu1";
import styles from "./HomeScreen.module.css";
import { EndMenu1 } from "../EndMenu1/EndMenu1";


export const HomeScreen = () =>{
    const [winner, setWinner] = useState();
    const[mode,setMode] = useState('start')

    return(
        <div className={styles.main}>
            {mode === 'start' && 
            <StartMenu1 onStartClick={() => setMode('battle')}/>}

            {mode === 'battle' && 
            <Battle1 
            onGameEnd={winner => {
                setWinner(winner);
                setMode('gameOver');}}/>}

            {mode === 'gameOver' && !!winner &&(
                <EndMenu1 winner={winner} onStartClick={() => setMode('battle')} />
            )}
        </div>
    );
};