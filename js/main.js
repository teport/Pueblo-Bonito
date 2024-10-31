const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.classList.add("no-scroll"); // Desactivar scroll
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.classList.remove("no-scroll"); // Activar scroll
});
