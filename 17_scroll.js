function loadElements() {
    let date = new Date();
    let currentDate = date.toString();
    let p = document.createElement("p");
    p.textContent = currentDate;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentElement("afterbegin", p);
}

window.addEventListener("scroll", () => {
    let scrollPosition = document.documentElement.scrollTop + document.body.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollPosition >= pageHeight) {
        loadElements();
    }
});