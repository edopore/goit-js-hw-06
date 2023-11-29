/**
 * Tarea 8
 * Escriba un script para controlar el formulario de acceso.
 * <form class="login-form">
 *  <label>
 *      Email
 *      <input type="email" name="email" />
 *  </label>
 *  <label>
 *      Password
 *      <input type="password" name="password" />
 *  </label>
 *  <button type="submit">Login</button>
 * </form>
 * -El procesamiento de form.login-form debe ser por el evento submit.
 * -La página no debe recargarse cuando se envía el formulario.
 * -Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia
 * diciendo que todos los espacios deben ser rellenados.
 * -Si el usuario ha rellenado todos los espacios y ha enviado el formulario,
 * reúne los valores de los espacios en donde el nombre del espacio es el nombre
 * de la propiedad y el valor del espacio es la propiedad.
 * Use la propiedad elements para acceder a los elementos del formulario.
 * -Muestre el objeto con los datos introducidos en la consola y borre los valores
 * de los campos espacio del formulario usando el método reset.
 */

const submitButton = document.querySelector("button");
const formInput = document.getElementsByClassName("login-form");
document.querySelector(".login-form").setAttribute("id", "form");

const formObject = submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (formInput[0][0].value === "" || formInput[0][1].value === "") {
    alert("Advertencia: Debe rellenar todos los espacios");
  } else {
    const obj = {
      email: formInput[0][0].value,
      password: formInput[0][1].value,
    };
    console.log(obj);
    document.getElementById("form").reset();
    return obj;
  }
});
