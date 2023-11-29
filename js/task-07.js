/**
 * Tarea 7
 * Escriba un script que reaccione a un cambio en el valor de input#font-size-control.
 * (evento input) y cambie el estilo inline de span#text actualizando el font-size.
 * Por lo tanto, al arrastrar el deslizador cambiará el tamaño del texto.
 * <input id="font-size-control" type="range" min="16" max="96" />
 * <br />
 * <span id="text">Abracadabra!</span>
 *
 */

const inputBar = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

spanText.style.fontSize = `${inputBar.value}px`;
inputBar.addEventListener("input", () => {
  spanText.style.fontSize = `${inputBar.value}px`;
});
