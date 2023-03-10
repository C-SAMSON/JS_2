const successButton = document.querySelector("#success");
const failButton = document.querySelector("#fail");

successButton.addEventListener("click", () => {
    sleepThrow(3000, true).then(() => {
        const pSuccess = document.createElement("p");
        pSuccess.textContent = "success";
        pSuccess.className = "success";
        document.body.insertAdjacentElement("beforeend", pSuccess);
    }).catch(() => {
        const pFail = document.createElement("p");
        pFail.textContent = "Fail";
        pFail.className = "Fail";
        document.body.insertAdjacentElement("beforeend", pFail);
    });
});   

failButton.addEventListener("click", () => {
    sleepThrow(3000, false).then(() => {
        const pSuccess = document.createElement("p");
        pSuccess.textContent = "success";
        pSuccess.className = "success";
        document.body.insertAdjacentElement("beforeend", pSuccess);
    }).catch(() => {
        const pFail = document.createElement("p");
        pFail.textContent = "Fail";
        pFail.className = "Fail";
        document.body.insertAdjacentElement("beforeend", pFail);
    });
}); 

