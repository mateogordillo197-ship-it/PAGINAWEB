/*
DOCUMENTACION:
- Este script añade animaciones a los elementos con la clase "animar" cuando la página se carga.
- Implementa un modo oscuro que se activa al hacer clic en el botón con id "modoBtn".
- Marca la sección activa en el menú superior según la posición de desplazamiento de la página.

window.addEventListener hace referencia al evento de carga de la ventana.
document.querySelectorAll selecciona todos los elementos con la clase especificada.
forEach itera sobre cada elemento seleccionado.
classList.add agrega una clase CSS a un elemento.
classList.toggle alterna una clase CSS en un elemento.
*/
window.addEventListener("load",()=>{
    document.querySelectorAll(".animar")
    .forEach(el=>el.classList.add("visible"));
});

/*
modobtn hace referencia al botón que activa el modo oscuro.
document.body.classList.toggle alterna la clase "oscuro" en el cuerpo del documento para cambiar el tema.
addEventListener escucha el evento de clic en el botón.
*/
document.getElementById("modoBtn")
.addEventListener("click",()=>{
    document.body.classList.toggle("oscuro");
});

/*
const links selecciona todos los enlaces dentro del menú superior.
window.addEventListener escucha el evento de desplazamiento de la ventana.
fromTop calcula la posición actual del desplazamiento más un margen de 100 píxeles.
*/
const links = document.querySelectorAll(".menu-superior a");

window.addEventListener("scroll",()=>{
    let fromTop = window.scrollY + 100;

    links.forEach(link=>{
        let section = document.querySelector(link.getAttribute("href"));
        if(
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ){
            links.forEach(l=>l.classList.remove("activo"));
            link.classList.add("activo");
        }
    });
});
