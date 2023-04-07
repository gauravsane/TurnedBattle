import {
    wait,
    magic,
    sharkRain,
    heal,
    attack,
    drain,
    playerStats,
    opponentStats,
    kisameattack,
    kisameshark,
    jirayaHairAttack,
  } from '../Shared1';
  import { useEffect, useState } from 'react';
  
  export const useBattleSequence1 = sequence => {
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
            const damage = attack({ attacker, receiver }); //calculate the damage by calling attack function
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen Altra Big Ball Rasengan`);
              await wait(1000);
  
              turn === 0                         //Animation attack start
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(100);
  
              turn === 0                          //Animation attack stop
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0                          //damage animation to opponent character
                ? setOpponentAnimation('Prison')
                : setPlayerAnimation('Prison');
              await wait(750);
   
              turn === 0                          //stop that animation
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(`${receiver.name} felt that!`);  //update announcer message 
              turn === 0                             //calculate who got the heat
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2000);
  
              setAnnouncerMessage(`Now it's ${receiver.name} turn!`);    
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);                 //set the other person turn
              setInSequence(false);
            })();
  
            break;
          }

          case 'sharkRain': {
            const damage = sharkRain({ attacker, receiver }); //calculate the damage by calling attack function
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen sward attack!`);
              await wait(1000);
  
              turn === 0                         //Animation attack start
                ? setPlayerAnimation('attack')
                : setOpponentAnimation('attack');
              await wait(100);
  
              turn === 0                          //Animation attack stop
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0                          //damage animation to opponent character
                ? setOpponentAnimation('Rain')
                : setPlayerAnimation('Rain');
              await wait(750);
   
              turn === 0                          //stop that animation
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(`${receiver.name} heat by Sward!`);  //update announcer message 
              turn === 0                             //calculate who got the heat
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait(2000);
  
              setAnnouncerMessage(`Now it's ${receiver.name} turn!`);    
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);                 //set the other person turn
              setInSequence(false);
            })();
  
            break;
          }

          case 'kisameattack': {
            const damage = kisameattack({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses shark attack!`);
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

          case 'kisameshark': {
            const damage = kisameshark({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses four shark attack!`);
              await wait(4000);
  
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


          case 'jirayaHairAttack': {
            const damage = jirayaHairAttack({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses Needle attack!`);
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
                `${receiver.name}'s heat by needles!`,
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




  
          case 'magic': {
            const damage = magic({ attacker, receiver });
  
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
                `${receiver.name}'s burned down!`,
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
  
          case 'heal': {
            const recovered = heal({ receiver: attacker });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen to heal!`);
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('healOp')
                : setOpponentAnimation('healOp');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              setAnnouncerMessage(`${attacker.name} has recovered health.`);
              turn === 0
                ? setPlayerHealth(h =>
                    h + recovered <= attacker.maxHealth
                      ? h + recovered
                      : attacker.maxHealth,
                  )
                : setOpponentHealth(h =>
                    h + recovered <= attacker.maxHealth
                      ? h + recovered
                      : attacker.maxHealth,
                  ); // We don't want to set HP more than the max
              await wait(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }

          case 'drain':{
            const drained = drain({ attacker, receiver }); //calculate the damage by calling attack function
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chose their sward Samehada!`);
              await wait(1300);
  
              turn === 0                         //Animation attack start
                ? setPlayerAnimation('drain')
                : setOpponentAnimation('drain');
              await wait(100);
  
              turn === 0                          //Animation attack stop
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0                          //damage animation to opponent character
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait(750);
   
              turn === 0                          //stop that animation
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');

                turn === 0
                ? setPlayerAnimation('damage')
                : setOpponentAnimation('damage');
              await wait(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait(500);
  
              turn === 0
                ? setPlayerHealth(h =>
                    h + drained <= attacker.maxHealth
                      ? h + drained
                      : attacker.maxHealth,
                  )
                : setOpponentHealth(h =>
                    h + drained <= attacker.maxHealth
                      ? h + drained
                      : attacker.maxHealth,
                  ); // We don't want to set HP more than the max
              await wait(100);
  
              setAnnouncerMessage(`${receiver.name}'s chakura is eaten by Samehada!`);  //update announcer message 
              turn === 0                             //calculate who got the heat and drained his health
                ? setOpponentHealth(h => (h - drained > 0 ? h - drained : 0))
                : setPlayerHealth(h => (h - drained > 0 ? h - drained : 0)); // We don't want a negative HP.
              await wait(2200);

              setAnnouncerMessage(`Now it's ${receiver.name} turn!`);    
              await wait(1500);
  
              setTurn(turn === 0 ? 1 : 0);                 
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
  