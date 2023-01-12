const successButton = document.querySelector("#success");
const failButton = document.querySelector("#fail");

successButton.addEventListener("click", async() => {
    try {
        await sleepThrow(3000, true)
        const pSuccess = document.createElement("p");
        pSuccess.textContent = "success";
        pSuccess.className = "success";
        document.body.insertAdjacentElement("beforeend", pSuccess);
    } catch {
        const pFail = document.createElement("p");
        pFail.textContent = "Fail";
        pFail.className = "Fail";
        document.body.insertAdjacentElement("beforeend", pFail);
    };
});   

failButton.addEventListener("click", async() => {
    try {
        await sleepThrow(3000, false)
        const pSuccess = document.createElement("p");
        pSuccess.textContent = "success";
        pSuccess.className = "success";
        document.body.insertAdjacentElement("beforeend", pSuccess);
    } catch {
        const pFail = document.createElement("p");
        pFail.textContent = "Fail";
        pFail.className = "Fail";
        document.body.insertAdjacentElement("beforeend", pFail);
    };
}); 

