/**
 * Tarea 6
 * Escriba un script que, si se pierde el enfoque en un input (evento blur),
 * el script comprobará el contenido del instupt para ver si el número de símbolos introducidos es correcto.
 * <input
 *  type="text"
 *  id="validation-input"
 *  data-length="6"
 *  placeholder="Please enter 6 symbols"/>
 *
 * - El número de símbolos que debe tener un input se especifica en su atributo data-length.
 * - Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde,
 * si no es correcto se vuelve rojo.
 *
 * Para añadir estilos, use las clases CSS valid e invalid,
 * que ya tenemos añadido a los archivos de origen del trabajo.
 * #validation-input {border: 3px solid #bdbdbd;}
 * #validation-input.valid {border-color: #4caf50;}
 * #validation-input.invalid {border-color: #f44336;}
 */

let cumulateSimbols = [];
const inputText = document.querySelector("#validation-input");

inputText.addEventListener("input", (event) => {
  if (event.data === null) {
    cumulateSimbols.pop();
  } else {
    cumulateSimbols.push(event.data);
  }
  if (cumulateSimbols.length == 6) {
    inputText.setAttribute("class", "valid");
  } else {
    inputText.setAttribute("class", "invalid");
  }
});
