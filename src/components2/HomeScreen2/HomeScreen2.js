import { useState } from "react";
import styles from "./HomeScreen2.module.css";
import { StartMenu2} from "../StartMenu2";
import { Battle2 } from "../Battle2/Battle2";
import { EndMenu2} from "../EndMenu2/EndMenu2";

export const HomeScreen2 = () => {
    const [mode,setMode] = useState('start');
    const [winner,setWinner] = useState();
    const [losser, setLosser] = useState();

    return(
        <div className={styles.main}>
            {mode === 'start' && (<StartMenu2 onStartClick={() => setMode('battle')} /> )}

            {mode === 'battle' && (
                <Battle2
                  onGameEnd={winner => {
                  setWinner(winner);
                  setMode('gameOver');
              }
            }   
                onGameEnd1={losser =>{
                  setLosser(losser);
                  setMode('gameOver');
                }}
            />
          )}

            {mode === 'gameOver' && <EndMenu2 winner={winner} losser={losser}
              onStartClick={() =>
              {
              setWinner(undefined);
              setLosser(undefined)
              setMode('battle');
              }}/>}
            
        </div>

    );

};