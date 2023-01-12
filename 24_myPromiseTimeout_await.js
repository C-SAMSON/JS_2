const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
const p = document.createElement("p");
p.textContent = "hello world";
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", async() => {
    let result = 0;
    result = await sleep(3000);
    button.insertAdjacentElement("afterend", p);
});