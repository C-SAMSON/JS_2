const p = document.createElement("p");
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
    setTimeout(() => {button.insertAdjacentElement("afterend", p);}, 3000);
});