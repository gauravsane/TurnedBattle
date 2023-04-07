export const wait1 = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const needle = ({ attacker, receiver}) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaHairAttack.gif';
    document.getElementById("pic1").src='/assets/Oruchimaru2.png';
    wait1(2000);
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};

export const heal1 = ({ receiver }) => {
  return receiver.magic + receiver.level * 0.25;
};


export const fireoil = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/sageMode.gif';
    document.getElementById("pic1").src='/assets/Oruchimaru2.png';

  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};

export const rasengan = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaRasengan.gif';
    document.getElementById("pic1").src='/assets/Oruchimaru2.png';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};

export const sageart = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/JirayaSageJutsu.gif';
    document.getElementById("pic1").src='/assets/Oruchimaru2.png';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};



export const snekclone = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaImage.png';
    document.getElementById("pic1").src='/assets/orochimaruShadowClone.gif';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};

export const snekstriking = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaImage.png';
    document.getElementById("pic1").src='/assets/orochimaruStrikingSnakes.gif';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};

export const bodyreplacement = ({ receiver }) => {
  document.getElementById("pic").src='/assets/jirayaImage.png';
  document.getElementById("pic1").src='/assets/orochimaruSnekClone.gif';
  return receiver.magic + receiver.level * 0.25;
};

export const sagejutsu = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaImage.png';
    document.getElementById("pic1").src='/assets/Oruchimaru2.gif';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};

export const wind = ({ attacker, receiver}) => {

  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;
    document.getElementById("pic").src='/assets/jirayaImage.png';
    document.getElementById("pic1").src='/assets/orochimaruWind.gif';
  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};


