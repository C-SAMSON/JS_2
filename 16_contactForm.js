const p = document.createElement("p");
p.id = "result";
const result = document.getElementById("result");
// const button = document.getElementsByClassName("button");
// buton.addEventListener("click", () => {
const yname = document.getElementsByName("name").value;
const age = document.getElementsByName("age").value;
const birthdate = document.getElementsByName("birthdate").value;
result.innerHTML = `name: ${yname}, age: ${age}, birthdate: ${birthdate}`
// )}