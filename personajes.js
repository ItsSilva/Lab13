import {personajePorId} from "./utils.js"

const render =async () => {

    //Sincronizar el id
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const personaje = await personajePorId(id);

    //Para que en el header se ajuste con el personaje tocado
    const headTitle= document.querySelector("#headTitle");
    headTitle.textContent=`${personaje.displayName} Character`;

    //Img del personaje + div
    const Personaje = document.querySelector(".Personaje");
    const leftImg = document.createElement("div");
    leftImg.className = "leftImg";
    const img = document.createElement("img");
    img.src = personaje.fullPortrait;
    leftImg.appendChild(img);
    Personaje.appendChild(leftImg);

    //Info del personaje + div
    const rightInfo = document.createElement("div");
    rightInfo.className = "rightInfo";
    Personaje.appendChild(rightInfo);

    const displayName = document.createElement('h1');
    displayName.textContent = personaje.displayName;
    rightInfo.appendChild(displayName);

    const description = document.createElement('p');
    description.textContent = personaje.description;
    rightInfo.appendChild(description);

    const h3 = document.createElement('h3');
    h3.textContent = "Role: " + personaje.role.displayName;
    rightInfo.appendChild(h3);

    const rolDescription = document.createElement('p');
    rolDescription.textContent = personaje.role.description;
    rightInfo.appendChild(rolDescription);

    const btnBackDiv = document.createElement('div');
    btnBackDiv.className = "btnBackDiv";
    rightInfo.appendChild(btnBackDiv);

    const btnBack = document.createElement('button');
    btnBack.classList.add("btnBack");
    btnBack.textContent = "Regresar a personajes";
    btnBackDiv.appendChild(btnBack);

    btnBack.addEventListener("click", () => {
        window.location.href = './index.html'
    });

}
document.addEventListener("DOMContentLoaded", render);