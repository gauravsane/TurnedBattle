import { useState, useEffect } from 'react';
import { PlayerSummary } from '../PlayerSummary';
import styles from './styles.module.css';
import { useAIOpponent} from '../../hooks/useAlOpponent';
import { useBattleSequence } from '../../hooks/useBattleSequence'
import { opponentStats, playerStats} from '../../Shared/character';
import { wait} from '../../Shared/helper'
import {BattleMenu} from '../BattleMenu';
import {BattleAnnouncer} from '../BattleAnnouncer';


export const Battle = ({ onGameEnd }) => {
  const [sequence, setSequence] = useState({});

    const {
      turn,
      inSequence,
      playerHealth,
      opponentHealth,
      playerAnimation,
      opponentAnimation,
      announcerMessage,
    } = useBattleSequence(sequence);
  
    const aiChoice = useAIOpponent(turn);
  
    useEffect(() => {
      if (aiChoice && turn === 1 && !inSequence) {
        setSequence({ turn, mode: aiChoice });
      }
    }, [turn, aiChoice, inSequence]);
  
    useEffect(() => {
      if (playerHealth === 0 || opponentHealth === 0) {
        (async () => {
          await wait(2000);
          onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
        })();
      }
    }, [playerHealth, opponentHealth, onGameEnd]);

    const [highScore, setHighScore] = useState(
      JSON.stringify(localStorage.getItem("highScore")) || Number.POSITIVE_INFINITY
    );
    const checkCompletion = () => {
      if (playerHealth === 0) {
        const highScore = 20;
        setHighScore(highScore);
        localStorage.setItem("highScore", highScore);
      }
      else{
        const highScore = 100;
        setHighScore(highScore);
        localStorage.setItem("highScore", highScore);
      }
    };

    useEffect(() => {
      // eslint-disable-next-line
      checkCompletion();
      // eslint-disable-next-line
    });

    return (
    <>
        <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary
            main={false}
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}  
            highScore ={highScore}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {playerStats.name} vs {opponentStats.name}
        </div>
        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              id="jiraya"
              className={styles[playerAnimation]}
            />
          </div>
          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              id="gaara"
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary
            main={true}
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>


        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={
                announcerMessage || `What will ${playerStats.name} do?`
              }
            />
          </div>
          {!inSequence && turn === 0 && (
            <div className={styles.hudChild}>
              <BattleMenu
                onClone={() => setSequence({ mode: 'clone', turn })}
                onRasengan={() => setSequence({ mode: 'rasengan', turn})}
                onAttack={() => setSequence({ mode: 'attack', turn })}
              />
            </div>
          )}
          </div>
        </div>
    </>

    );
};