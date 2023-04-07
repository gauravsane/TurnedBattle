export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const attack = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.50;
    document.getElementById("jiraya").src='/assets/jirayaRasengan.gif';
    document.getElementById("kisame").src='/assets/kisameImage.png';

  const finalDamage = receivedDamage - receiver.defense / 3;

  return finalDamage;
};
export const magic = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 1.25;
    document.getElementById("jiraya").src='/assets/sageMode.gif';
    document.getElementById("kisame").src='/assets/kisameImage.png';

  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};
export const heal = ({ receiver }) => {
  return receiver.magic + receiver.level * 0.25;

};
export const drain = ({ attacker, receiver }) => {

  const receivedDamage =
    attacker.drain - (attacker.level - receiver.level) * 0.25;
    document.getElementById("kisame").src='/assets/kisamesward.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.defense / 4;

  return finalDamage;
};

export const jirayaHairAttack = ({attacker,receiver}) =>{
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 1.25;
    document.getElementById("jiraya").src='/assets/jirayaHairAttack.gif';
    document.getElementById("kisame").src='/assets/kisameImage.png';
  const finalDamage = receivedDamage - receiver.defense / 2;
  return finalDamage;
}

export const kisameshark = ({attacker,receiver}) =>{
  const receivedDamage =
    attacker.earthstylewall - (attacker.level - receiver.level) * 3.10;
    document.getElementById("kisame").src='/assets/kisameshark.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.defense / 2;
  return finalDamage;
}

export const kisameattack = ({attacker,receiver}) =>{
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("kisame").src='/assets/kisameattack.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.defense / 2;
  return finalDamage;
};
export const sharkRain = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.50;
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
    document.getElementById("kisame").src='/assets/kisamesward.gif';
  const finalDamage = receivedDamage - receiver.defense / 3;

  return finalDamage;
};


