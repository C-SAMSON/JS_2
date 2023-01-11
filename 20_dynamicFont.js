let inputFontsize = document.getElementById("fontsize");
let controlledElements = document.querySelectorAll(".controlled_fontsize");
controlledElements = Array.prototype.slice.call(controlledElements);

inputFontsize.addEventListener("input", () => {
  controlledElements.map((element) => element.style.fontSize = inputFontsize.value + "px");
});