const background = document.querySelector('.body'),
    button = background.querySelector('.button'),
    firstHexCode = background.querySelector('.hexcode1'),
    secondHexCode = background.querySelector('.hexcode2');

const handleButtonClick = () => {
  let firstColor = getColor(),
      secondColor = getColor();
  changeBackgroundColor({
    firstRgb: firstColor.rgb,
    secondRgb: secondColor.rgb
  })
  changeHexColors({
    firstHex: firstColor.hex,
    secondHex: secondColor.hex
  })
}

const getColor = () => {
  let rgb = `rgb(`,
      hex = ``
  for (let i = 0; i < 3; i++) {
    let int = getRandomInteger();
    rgb = `${rgb}${int} `;
    hex = `${hex}${convertToHex(int)}`;
  }
  rgb = `${rgb})`
  return {
    rgb: rgb,
    hex: hex
  }
}

const getRandomInteger = () => {
  return Math.floor(Math.random()*255)
}

const convertToHex = (int) => {
  if (int.toString(16).length !== 1) {
    return int.toString(16);
  }
  return `0${int.toString(16)}`
}

const changeBackgroundColor = ({ firstRgb, secondRgb }) => {
  background.style.background = `linear-gradient(to right, ${firstRgb}, ${secondRgb}` ;
}

const changeHexColors = ({ firstHex, secondHex }) => {
  firstHexCode.textContent = firstHex;
  secondHexCode.textContent = secondHex;
}

button.addEventListener('click', handleButtonClick);
