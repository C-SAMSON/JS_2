var square = document.getElementById("square");
var left = 0;
var top = 0;
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            left -= 10;
            square.style.left = left + "px";
            break;
        case "ArrowRight":
            left += 10;
            square.style.left = left + "px";
            break;
        case "ArrowDown":
            top -= 10;
            square.style.top = top + "px";
            break;
        case "ArrowUp":
            top += 10;
            square.style.top = top + "px";
            break;
    }
})