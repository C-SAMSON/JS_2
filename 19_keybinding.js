var square = document.getElementById("square");
var left = 0;
var topl = 0;
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
        case "ArrowUp":
            topl -= 10;
            square.style.top = topl + "px";
            break;
        case "ArrowDown":
            topl += 10;
            square.style.top = topl + "px";
            break;
    }
})