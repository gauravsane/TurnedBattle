import {
    wait,
    rasengan,
    clone,
    attack,
    SandBullet,
    gaaraSand,
    gaaraAttack,
  } from '../Shared/helper';
  import { useEffect, useState } from 'react';
  import { opponentStats, playerStats} from '../Shared/character';
  
  export const useBattleSequence = sequence => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
  
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(
      opponentStats.maxHealth,
    );
  
    const [announcerMessage, setAnnouncerMessage] = useState('');
  
    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static');
  
    useEffect(() => {
      const { mode, turn } = sequence;
  
      if (mode) {
        const attacker = turn === 0 ? playerStats : opponentStats;
        const receiver = turn === 0 ? opponentStats : playerStats;
  
        switch (mode) {
          case 'attack': {
            const damage = attack({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen to Toad Oil Fireball!`);
              await wait(2000);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait(100);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(`${receiver.name} felt that!`);
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2000);
  
              setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }
  
          case 'rasengan': {
            const damage = rasengan({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} use Rasengan!`);
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what hit them!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }
  
          case 'clone': {
            const damage = clone({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses Sage art Goemon!`);
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what hit them!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'SandBullet': {
            const damage = SandBullet({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} use SandBullet!`);
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} heat by SandBullet!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'gaaraSand': {
            const damage = gaaraSand({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} use Sand Tsunami!`);
              await wait(1200);
  
              turn === 0
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what's heat them??`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'gaaraAttack': {
            const damage = gaaraAttack({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses Attack!`);
              await wait(1200);
  
              turn === 0
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} has some damage happened??`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2500);
  
              setAnnouncerMessage(`${receiver.name} doesn't know what happend`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1: 0);
              setInSequence(false);
            })();
  
            break;
          }
  
  
          default:
            break;
        }
      }
    }, [sequence]);
  
    return {
      turn,
      inSequence,
      playerHealth,
      opponentHealth,
      playerAnimation,
      opponentAnimation,
      announcerMessage,
    };
  };
  