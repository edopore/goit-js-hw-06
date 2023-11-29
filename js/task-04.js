/**
 * Tarea 4
 * El contador consta de un span y de botones que, al ser pulsados,
 * deben aumentar y disminuir su valor en uno.
 * <div id="counter">
 *  <button type="button" data-action="decrement">-1</button>
 *  <span id="value">0</span>
 *  <button type="button" data-action="increment">+1</button>
 * </div>
 * Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
 * Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
 * Actualice la interfaz con el nuevo valor de la variable counterValue.
 */

let counterValue = 0;

const counter = document.querySelector("#counter");
const countsView = document.querySelector("#value");
const action = (event) => {
  switch (event.target.attributes[1].value) {
    case "decrement":
      counterValue -= 1;
      break;
    case "increment":
      counterValue += 1;
      break;
    default:
      return "Valor no permitido";
  }
  countsView.textContent = counterValue;
};
counter.addEventListener("click", action);
