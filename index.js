import { obtenerPersonaje, PersonajeCard } from "./utils.js";

const render = async () => {
  const response = await obtenerPersonaje();
  console.log(response);

  const personajes = document.querySelector(".personajes");
  const barraBusqueda = document.querySelector(".barraBusqueda");

  // Barra de búsqueda
  barraBusqueda.addEventListener("input", () => {
    const searchTerm = barraBusqueda.value.toLowerCase();
    personajes.innerHTML = "";

    for (const personaje of response) {
      if (
        personaje.displayName.toLowerCase().includes(searchTerm) ||
        personaje.description.toLowerCase().includes(searchTerm)
      ) {
        const personajeCard = new PersonajeCard(personaje);
        personajes.appendChild(personajeCard.crearCard());
        personajeCard.addEventListeners();
      }
    }
  });

  for (const personaje of response) {
    const personajeCard = new PersonajeCard(personaje);
    personajes.appendChild(personajeCard.crearCard());
    personajeCard.addEventListeners();
  }
};

document.addEventListener("DOMContentLoaded", render);