const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
const p = document.createElement("p");
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
    sleep(3000).then(() => {button.insertAdjacentElement("afterend", p);});
});