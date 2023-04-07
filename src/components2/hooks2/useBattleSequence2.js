import { useEffect, useState } from "react";
import { opponentStats1,playerStats1 } from "../Shared2/character2";
import {  wait1, heal1, needle,rasengan, fireoil, sageart, snekclone, snekstriking, bodyreplacement, sagejutsu, wind } from "../Shared2/helper2";

export const useBattleSequence2 = sequence =>{
    const [turn,setTurn] = useState(0);
    const [inSequence,setInSequence] = useState(false);
    const [playerHealth, setPlayerHealth] = useState(playerStats1.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats1.maxHealth);
    const [announcerMessage, setAnnouncerMessage] = useState('');
    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static');

    useEffect(() =>{
        const { mode, turn} = sequence;

        if (mode){
            const attacker = turn === 0 ? playerStats1 : opponentStats1;
            const receiver = turn === 0 ? opponentStats1 : playerStats1;

            switch (mode){
                case 'snekclone':{
                    const damage = snekclone({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen Ten Thousand Snekes Jutsu!`);
            await wait1(3400);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait1(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait1(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait1(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
            setAnnouncerMessage(`${receiver.name} felt that!`);
            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait1(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait1(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }


          case 'snekstriking':{
            const damage = snekstriking({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen Striking Shadow Snek!`);
            await wait1(800);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait1(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait1(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait1(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
            setAnnouncerMessage(`${receiver.name} felt that!`);
            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait1(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait1(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
          }

          case 'sagejutsu': {
            const damage = sagejutsu({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has choose Sage Attack!`);
              await wait1(950);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait1(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait1(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what hit them!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait1(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait1(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'wind': {
            const damage = wind({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has choose Wind Jutsu!`);
              await wait1(950);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait1(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait1(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what hit them!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait1(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait1(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'sageart':{
            const damage = sageart({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
            await wait1(2200);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait1(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait1(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait1(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
            setAnnouncerMessage(`${receiver.name} felt that!`);
            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait1(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait1(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
          }



        case 'fireoil': {
            const damage = fireoil({ attacker, receiver });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has choose Toad Oil Fireball!`);
              await wait1(200);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait1(500);
  
              turn === 0
                ? setOpponentAnimation('damage')
                : setPlayerAnimation('damage');
              await wait1(750);
  
              turn === 0
                ? setOpponentAnimation('static')
                : setPlayerAnimation('static');
              setAnnouncerMessage(
                `${receiver.name} doesn't know what hit them!`,
              );
              turn === 0
                ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
                : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
              await wait1(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait1(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }

          case 'bodyreplacement': {
            const recovered = bodyreplacement({ receiver: attacker });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen Orochimaru-Style Body Replacement Technique!`);
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait1(500);
  
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
              await wait1(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait1(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


          case 'heal1': {
            const recovered = heal1({ receiver: attacker });
  
            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen to heal!`);
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('magic')
                : setOpponentAnimation('magic');
              await wait1(1000);
  
              turn === 0
                ? setPlayerAnimation('static')
                : setOpponentAnimation('static');
              await wait1(500);
  
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
              await wait1(2500);
  
              setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
              await wait1(1500);
  
              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
  
            break;
          }


            case 'rasengan':{
              const damage = rasengan({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen Rasengan!`);
            await wait1(1200);

            turn === 0
              ? setPlayerAnimation('attack')
              : setOpponentAnimation('attack');
            await wait1(100);

            turn === 0
              ? setPlayerAnimation('static')
              : setOpponentAnimation('static');
            await wait1(500);

            turn === 0
              ? setOpponentAnimation('damage')
              : setPlayerAnimation('damage');
            await wait1(750);

            turn === 0
              ? setOpponentAnimation('static')
              : setPlayerAnimation('static');
            setAnnouncerMessage(`${receiver.name} felt that!`);
            turn === 0
              ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
            await wait1(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait1(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }




          case 'needle':{
            const damage = needle({ attacker, receiver });

  (async () => {
    setInSequence(true);
    setAnnouncerMessage(`${attacker.name} has chosen SageMode!`);
    await wait1(1400);

    turn === 0
      ? setPlayerAnimation('attack')
      : setOpponentAnimation('attack');
    await wait1(100);

    turn === 0
      ? setPlayerAnimation('static')
      : setOpponentAnimation('static');
    await wait1(500);

    turn === 0
      ? setOpponentAnimation('damage')
      : setPlayerAnimation('damage');
    await wait1(750);

    turn === 0
      ? setOpponentAnimation('static')
      : setPlayerAnimation('static');
    setAnnouncerMessage(`${receiver.name} felt that!`);
    turn === 0
      ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0))
      : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0)); // We don't want a negative HP.
    await wait1(2000);

    setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
    await wait1(1500);

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


    return{
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        announcerMessage,
        playerAnimation,
        opponentAnimation,
    };
};