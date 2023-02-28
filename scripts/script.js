//Modo nocturno

// obtener el botón "modo nocturno"
const modoNocturno = document.getElementById("modo-nocturno");

// obtener el elemento body
const body = document.getElementById("cambio-color");

// obtener el estado actual del modo nocturno desde el localStorage
const isModoNocturno = localStorage.getItem("modoNocturno") === "true";

// actualizar la clase del body según el estado actual del modo nocturno
body.classList.toggle("nocturno", isModoNocturno);

// agregar un event listener para el clic en el botón "modo nocturno"
modoNocturno.addEventListener("click", () => {
  // obtener el nuevo estado del modo nocturno
  const nuevoEstado = !body.classList.contains("nocturno");

  // actualizar la clase del body según el nuevo estado del modo nocturno
  body.classList.toggle("nocturno", nuevoEstado);

  // guardar el nuevo estado del modo nocturno en el localStorage
  localStorage.setItem("modoNocturno", nuevoEstado);
});

//Mostrar imagenes en el slider

function mostrarImagenCompleta(imagen) {
  // Crear el elemento div para mostrar la imagen completa
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.zIndex = 9999;

  // Crear la imagen y agregarla al div
  var img = document.createElement("img");
  img.src = imagen;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.position = "absolute";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";

  overlay.appendChild(img);

  // Agregar el evento de click al div overlay para cerrar el pop-up
  overlay.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });

  // Agregar el div al cuerpo del documento
  document.body.appendChild(overlay);
}

const slider = document.getElementById("my-slider");

//Footer
const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
