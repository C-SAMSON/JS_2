const p = document.createElement("p");
p.id = "result";
const button = document.getElementsByTagName("button")[0];
button.insertAdjacentElement("afterend", p);
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const yname = document.getElementsByName("name")[0].value;
    const age = document.getElementsByName("age")[0].value;
    const birthdate = document.getElementsByName("birthdate")[0].value;
    result.innerHTML = `name: ${yname}, age: ${age}, birthdate: ${birthdate}`;
});