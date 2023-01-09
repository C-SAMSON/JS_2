const toggleButton = document.getElementById("toggle");
const modal = document.getElementById("modal");

toggleButton.addEventListener("click", () => {
  if (modal.classList.contains("is-open")) {
    modal.classList.remove("is-open");
  } else {
    modal.classList.add("is-open");
  }
});