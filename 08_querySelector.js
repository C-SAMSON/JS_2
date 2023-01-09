const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  if (button.classList.contains("danger")) {
    button.style.backgroundColor = "red";
  } else if (button.classList.contains("warning")) {
    button.style.backgroundColor = "yellow";
  } else if (button.classList.contains("secondary")) {
    button.style.backgroundColor = "grey";
  } else {
    button.style.backgroundColor = "blue";
  }
});