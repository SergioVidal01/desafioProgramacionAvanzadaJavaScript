import { Aguila, Leon, Lobo, Oso, Serpiente } from "./claseAnimal.js";

import { mandarDatos } from "./request.js";

let animales = [];
let img = document.getElementById("preview");
let audio = document.getElementById("player");
const registrar = document.getElementById("btnRegistrar");
let nombre = document.getElementById("animal");

// Evento para registrar un nuevo animal
registrar.addEventListener("click", async () => {
  let edad = document.getElementById("edad");
  let comentario = document.getElementById("comentarios");
  let animal;

  // Verifica que todos los campos estén completos
  if (nombre.value && edad.value && comentario.value) {
    let datos = await mandarDatos.mostrar; // Obtiene los datos

    // Crea un nuevo objeto de animal basado en el nombre seleccionado
    switch (nombre.value) {
      case "Leon":
        animal = new Leon(
          nombre.value,
          edad.value,
          datos.animales[0].imagen,
          comentario.value,
          datos.animales[0].sonido
        );
        break;
      case "Lobo":
        animal = new Lobo(
          nombre.value,
          edad.value,
          datos.animales[1].imagen,
          comentario.value,
          datos.animales[1].sonido
        );
        break;
      case "Oso":
        animal = new Oso(
          nombre.value,
          edad.value,
          datos.animales[2].imagen,
          comentario.value,
          datos.animales[2].sonido
        );
        break;
      case "Serpiente":
        animal = new Serpiente(
          nombre.value,
          edad.value,
          datos.animales[3].imagen,
          comentario.value,
          datos.animales[3].sonido
        );
        break;
      case "Aguila":
        animal = new Aguila(
          nombre.value,
          edad.value,
          datos.animales[4].imagen,
          comentario.value,
          datos.animales[4].sonido
        );
        break;
    }

    // Resetea los campos del formulario
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentario.value = "";
    img.innerHTML = `<img src="">`;

    // Añade el nuevo animal a la lista y actualiza la tabla
    animales.push(animal);
    mostrarTabla();
  } else {
    alert("Complete los datos para continuar");
  }
});

// Función para mostrar los animales en una tabla
const mostrarTabla = () => {
  let animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = ""; // Limpia la tabla

  // Itera sobre los animales y genera el HTML
  animales.forEach((a, i) => {
    animalesTemplate.innerHTML += `
        <div class="col-3">
            <div class="px-3 pb-2 animales" data-fighter="${a.getNombre()}">
                <div class="card-deck ml-1">
                    <div class="card" style="width: 10rem;">
                        <img src="assets/imgs/${a.getImg()}" alt="${a.getNombre()}" onclick="verDatos(${i})" data-toggle="modal" data-target="#datos" class="card-img-top" />
                        <div class="card-body">
                            <button class="btn btn-secondary" onclick="sonido(${i})">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  });
};

// Función para mostrar los detalles del animal en un modal
window.verDatos = (i) => {
  let datos = animales[i];
  let modal = document.getElementById("datosAnimal");

  modal.innerHTML = `
    <div>
        <img src="assets/imgs/${datos.getImg()}" alt="${datos.getNombre()}" width="100"/>
    </div>
    <p>Edad: ${datos.getEdad()}</p>
    <p>Comentarios: ${datos.getComentarios()}</p>
    `;
};

// Función para reproducir el sonido del animal
window.sonido = (i) => {
  let animal = animales[i];
  let sonido = animal.getSonido();
  audio.src = `assets/sounds/${sonido}`;
  audio.play();
};

// Cambia la imagen de vista previa según el animal seleccionado
document
  .getElementById("animal")
  .addEventListener("change", function cambiarImg() {
    let animalSeleccionado = document.getElementById("animal").value;
    const imagenes = {
      Leon: "Leon.png",
      Lobo: "Lobo.jpg",
      Oso: "Oso.jpg",
      Serpiente: "Serpiente.jpg",
      Aguila: "Aguila.png",
    };

    // Cambia la imagen de vista previa según el animal seleccionado
    img.innerHTML = `<img src="assets/imgs/${imagenes[animalSeleccionado]}" width="200">`;
  });
