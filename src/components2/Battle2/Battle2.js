import { useEffect, useState } from "react";
import { PlayerSummary2 } from "../PlayerSummary2/PlayerSummary2";
import styles from "./styles.module.css";
import {playerStats1,opponentStats1} from "../Shared2/character2";
import { BattleMenu2} from "../BattleMenu2/BattleMenu2";
import { BattleAnnouncer2 } from "../BattleAnnouncer2/BattleAnnouncer2";
import { useBattleSequence2 } from "../hooks2/useBattleSequence2";
import { useAIOpponent2 } from "../hooks2/useAIOpponent2";
import { wait1 } from "../Shared2/helper2";

 
export const Battle2 = ({onGameEnd,onGameEnd1}) =>{
    const[sequence,setSequence] = useState({});

    const {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        announcerMessage,
        playerAnimation,
        opponentAnimation,
    } = useBattleSequence2(sequence);

    const aiChoice = useAIOpponent2(turn);

    useEffect(() =>{
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice });
          }
    }, [turn,aiChoice,inSequence]);

    useEffect(() => {
        if (playerHealth === 0 || opponentHealth === 0) {
          (async () => {
            await wait1(1000);
            onGameEnd(playerHealth === 0 ? opponentStats1 : playerStats1);
          })();
        }
      }, [playerHealth, opponentHealth, onGameEnd,onGameEnd1]);


    return (
        <>
            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary2 
                    health={opponentHealth}
                    name={opponentStats1.name}
                    level={opponentStats1.level}
                    maxHealth={opponentStats1.maxHealth}
                    />
                </div>
            </div>

            <div className={styles.characters}>
                <div className={styles.gameHeader}>
                    {playerStats1.name} vs {opponentStats1.name}
                </div>

                <div className={styles.gameImages}>
                    <div className={styles.playerSprite}>
                        <img 
                        alt={playerStats1.name}
                        src={playerStats1.img}
                        id="pic"
                        className={styles[playerAnimation]}
                        />
                    </div>

                    <div className={styles.opponentSprite}>
                    <img 
                        alt={opponentStats1.name}
                        src={opponentStats1.img}
                        id="pic1"
                        className={styles[opponentAnimation]}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary2 
                    main
                    health={playerHealth}
                    name={playerStats1.name}
                    level={playerStats1.level}
                    maxHealth={playerStats1.maxHealth} />
                </div>

                <div className={styles.hud}>

                <div className={styles.hudChild}>
                    <BattleAnnouncer2 
                    message={
                        announcerMessage || `What will ${playerStats1.name} do?` 
                    }/>
                </div>
                {!inSequence && turn === 0 && (
            <div className={styles.hudChild}>
                <BattleMenu2
                onSageArt={() => setSequence({ turn, mode: 'sageart'})}
                onFireOil={() => setSequence({ turn, mode: 'fireoil'})} 
                onHeal={() => setSequence({ turn, mode: 'heal1'})} 
                onNeedle={() => setSequence({turn,mode: 'needle'})}
                onRasengan ={() => setSequence({turn,mode: 'rasengan'})}
                />
            </div>
                )}
            </div>
            </div>
        </>
    );
};