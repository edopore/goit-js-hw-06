/**
 * Tarea 5
 * Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input),
 * sustituya su valor actual en span#name-output.
 * Si el input está vacío, el span debería mostrar la secuencia "Anónimo".
 * <input type="text" id="name-input" placeholder="Please enter your name" />
 * <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
 *
 */

let cumulateInput = [];
let flag = true;
const inputText = document.getElementById("name-input");
const spanText = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  if (event.data === null) {
    cumulateInput.pop();
  } else {
    cumulateInput.push(event.data);
  }
  if (cumulateInput.length === 0) {
    spanText.textContent = "Anónimo";
  } else {
    spanText.textContent = cumulateInput.join("");
  }
});
