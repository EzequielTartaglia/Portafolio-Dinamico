//Footer
const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;


  // obtener el botón "modo nocturno"
  const modoNocturno = document.getElementById("modo-nocturno");

  // obtener el elemento body
  const body = document.getElementById("cambio-color");

  // agregar un event listener para el clic en el botón "modo nocturno"
  modoNocturno.addEventListener("click", () => {
    // agregar o remover la clase "nocturno" del elemento body
    body.classList.toggle("nocturno");
  });