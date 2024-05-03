export const obtenerPersonaje = async () => {
  const response = await fetch("https://valorant-api.com/v1/agents");
  const cosito = await response.json();
  return cosito.data;
};
  
export const personajePorId = async (id) => {
  const personaje = await obtenerPersonaje();

  for (const item of personaje){
    if(item.uuid === id) {
      return item;
    }
  }

  throw new Error ("Personaje no encontrado");
}

export class PersonajeCard {
  #nodoBotonEliminar;
  #nodobotonInfo;
  constructor(personaje) {
    this.personaje = personaje;
    this.contenedor = null; 

  }

  crearCard() {
    this.contenedor = document.createElement("div");
    this.contenedor.classList.add("contenedor");

    const left = document.createElement("div");
    left.classList.add("left");
    this.contenedor.appendChild(left);

    const displayImg = document.createElement("img");
    displayImg.src = this.personaje.displayIcon;
    left.appendChild(displayImg);

    const right = document.createElement("div");
    right.classList.add("right");
    this.contenedor.appendChild(right);

    const displayName = document.createElement("h2");
    displayName.textContent = this.personaje.displayName;
    right.appendChild(displayName);

    const description = document.createElement("p");
    description.textContent = this.personaje.description;
    right.appendChild(description);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    right.appendChild(btnDiv);

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Ver información detallada";
    this.#nodobotonInfo = button;
    btnDiv.appendChild(button);

    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash", "fa-3x");
    this.#nodoBotonEliminar = trash;
    btnDiv.appendChild(trash);



    return this.contenedor;
  }

  addEventListeners() {
    this.#nodoBotonEliminar.addEventListener("click", async () => {
      this.contenedor.remove();
    });
    this.#nodobotonInfo.addEventListener("click", async() => {;
    window.location.href = `./personajes.html?id=${this.personaje.uuid}`;
  });
}
}