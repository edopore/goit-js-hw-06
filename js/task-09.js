/**
 * Tarea 9
 * Escriba un script que cambie el color de fondo del elemento <body> mediante el estilo inline
 * cuando se hace clic en button.change-color y emite el valor del color en span.color.
 *
 * <div class="widget">
 *  <p>Background color: <span class="color">-</span></p>
 *  <button type="button" class="change-color">Change color</button>
 * </div>
 * Use la función getRandomHexColor para generar un color aleatorio.
 * function getRandomHexColor() {
 * return `#${Math.floor(Math.random() * 16777215)
 * .toString(16)
 * .padStart(6, 0)}`;
 * }
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector("button");
const bodySelector = document.querySelector("Body");
const spanText = document.querySelector("span");
bodySelector.setAttribute("id", "body");
spanText.textContent = "#FFFFFF";

document.getElementById("body").style.backgroundColor = `#FFFFFF`;
changeButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.getElementById("body").style.backgroundColor = `${color}`;
  spanText.textContent = color.toUpperCase();
});
