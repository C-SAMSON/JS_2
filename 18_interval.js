function updateClock() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("clock").innerHTML = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

