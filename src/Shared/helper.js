export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const attack = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("jiraya").src='/assets/jirayaSageJutsu.gif';
    document.getElementById("gaara").src='/assets/gaaraImage.gif';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};
export const rasengan = ({ attacker, receiver }) => {
 
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 1.25;
    document.getElementById("jiraya").src='/assets/jirayaRasengan.gif';
    document.getElementById("gaara").src='/assets/gaaraImage.gif';
  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};
export const clone = ({ attacker,receiver }) => {
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 4.25;
    document.getElementById("jiraya").src='/assets/sageMode.gif';
    document.getElementById("gaara").src='/assets/gaaraImage.gif';
  const finalDamage = receivedDamage - receiver.magicDefense / 2;
  return finalDamage;
};

export const SandBullet = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.chidori - (attacker.level - receiver.level) * 1.25;
    document.getElementById("gaara").src='/assets/sandBullet.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};

export const gaaraSand = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.fireball - (attacker.level - receiver.level) * 1.25;   
    document.getElementById("gaara").src='/assets/gaaraSward.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};

export const gaaraAttack = ({ attacker, receiver }) => {

  const receivedDamage =
    attacker.sharingan - (attacker.level - receiver.level) * 1.25;   
    document.getElementById("gaara").src='/assets/gaaraSand.gif';
    document.getElementById("jiraya").src='/assets/jirayaImage.png';
  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};



