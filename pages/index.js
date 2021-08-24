const background = document.querySelector('.body'),
    button = background.querySelector('.button'),
    firstHexCode = background.querySelector('.hexcode1'),
    secondHexCode = background.querySelector('.hexcode2');

const handleButtonClick = () => {
  let firstColor = getColor(),
      secondColor = getColor();
  changeColors({
    firstHex: firstColor,
    secondHex: secondColor
  })
}

const getColor = () => {
  let hex = `#`
  for (let i = 0; i < 3; i++) {
    let int = getRandomInteger();
    hex = `${hex}${convertToHex(int)}`;
  }
  return hex
}

const getRandomInteger = () => {
  return Math.floor(Math.random() * 255)
}

const convertToHex = (int) => {
  if (int.toString(16).length !== 1) {
    return int.toString(16);
  }
  return `0${int.toString(16)}`
}

const changeColors = ({ firstHex, secondHex }) => {
  background.style.background = `linear-gradient(to right, ${firstHex}, ${secondHex}`;
  firstHexCode.textContent = firstHex;
  secondHexCode.textContent = secondHex;
}

button.addEventListener('click', handleButtonClick);
