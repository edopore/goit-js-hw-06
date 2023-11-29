/**
 *  Tarea 1
 *  Existe una lista de categorías en el HTML ul#categories.
 *  Escriba un script que:
 *  - Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item.
 *  Para cada elemento li.item en la lista ul#categories,encuentre y envíe a la consola el texto del título
 *  del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>).
 *  Como resultado, se mostrarán los siguientes mensajes en la consola.
 *
 *  Number of categories: 3
 *
 *  Category: Animals
 *  Elements: 4
 *
 *  Category: Products
 *  Elements: 3
 *
 *  Category: Technologies
 *  Elements: 5
 */

const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);
for (const element of list) {
  console.log("");
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
}
