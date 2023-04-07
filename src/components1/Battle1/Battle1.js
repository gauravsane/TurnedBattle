import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useAIOpponent1} from '../Hooks1/useAiOpponent1';
import { useBattleSequence1 } from '../Hooks1/useBattleSequence1';
import { opponentStats, playerStats} from '../Shared1/character1';
import { wait } from '../Shared1/helper1';
import {PlayerSummary1 } from '../PlayerSummary1';
import { BattleAnnouncer1 } from '../BattleAnnouncer1';
import { BattleMenu1} from '../BattleMenu1/BattleMenu1';
 


export const Battle1 = ({ onGameEnd }) => {
  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence1(sequence);

  const aiChoice = useAIOpponent1(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1200);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary1
            main={false}
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
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
              id="kisame"
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary1
            main={true}
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>

        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer1
              message={
                announcerMessage || `What will ${playerStats.name} do?`
              }
            />
          </div>
          {!inSequence && turn === 0 && (
            <div className={styles.hudChild}>
              <BattleMenu1
                onNeedle={() => setSequence({ mode: 'jirayaHairAttack', turn })}
                onMagic={() => setSequence({ mode: 'magic', turn })}
                onAttack={() => setSequence({ mode: 'attack', turn })}
                onHeal={() => setSequence({ mode: 'heal', turn })}
              />
            </div>
          )}
        </div>
      </div>
    </>
    
  );
};
