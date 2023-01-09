let btn = document.querySelector("#clickme");
btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.id = "result";
    p.textContent = "clicked";
    let content = document.querySelector(".content");
    content.insertBefore(p, content.firstChild);    
})