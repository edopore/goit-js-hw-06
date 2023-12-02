/**
 * Tarea 10 (Opcional)
 * Escriba un script para crear y borrar una colección de elementos.
 * El usuario introduce el número de elementos en input y pulsa el botón Create,
 * tras lo cual la colección se ha renderizado.
 * Cuando el usuario hace clic en el botón Borrar, la colección de artículos ya se ha despejado.
 *
 * <div id="controls">
 *  <input type="number" min="1" max="100" step="1" />
 *  <button type="button" data-create>Create</button>
 *  <button type="button" data-destroy>Destroy</button>
 * </div>
 * <div id="boxes"></div>
 *
 * Cree una función createBoxes(amount) que tome un parámetro, un número.
 * La función crea tantos <div> como se especifique en amount y los añade a div#boxes.
 * - El tamaño del primer <div> es de 30px por 30px.
 * - Cada elemento después del primero, debe ser 10px más ancho y alto que el anterior.
 * - Todos los elementos deben tener un color de fondo aleatorio en formato HEX.
 * Use la función getRandomHexColor lista para obtener el color.
 *
 * function getRandomHexColor() {
 * return `#${Math.floor(Math.random() * 16777215)
 * .toString(16)
 * .padStart(6, 0)}`;
 * }
 *
 * Cree una función destroyBoxes() que borre el contenido de div#boxes,
 * eliminando así todos los elementos creados.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  for (let i = 0; i < amount; i++) {
    let newBox = document.createElement("div");
    newBox.setAttribute("id", `box`);
    newBox.style.width = `${width}px`;
    newBox.style.height = `${width}px`;
    newBox.style.background = `${getRandomHexColor()}`;
    divBoxes.append(newBox);
    width += 10;
  }
}

function destroyBoxes() {
  const parent = document.getElementById("boxes");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

const controlButtons = document.querySelectorAll("button");
const inputValue = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

const action = (event) => {
  switch (event.target.attributes[1].name) {
    case "data-create":
      createBoxes(inputValue.value);
      break;
    case "data-destroy":
      destroyBoxes();
      break;
    default:
      console.log("Valor inválido");
  }
};
controlButtons[0].addEventListener("click", action);
controlButtons[1].addEventListener("click", action);
