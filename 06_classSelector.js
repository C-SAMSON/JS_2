function getThirdXWingText() {
  let xwings = document.getElementsByClassName("x-wing");
  return xwings[2].textContent;
}

// console.log(getThirdXWingText);
module.exports = getThirdXWingText;