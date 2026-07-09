/*
DOCUMENTACION:
- Este script añade animaciones a los elementos con la clase "animar" cuando la página se carga.
- Implementa un modo oscuro que se activa al hacer clic en el botón con id "modoBtn".
- Marca la sección activa en el menú superior según la posición de desplazamiento de la página.
- Controla el botón flotante "Volver arriba" para que aparezca al bajar y regrese a la cima de forma suave.
*/

// 1. Animación inicial de elementos al cargar y al ir haciendo scroll
window.addEventListener("load", ()=>{
    document.querySelectorAll(".animar").forEach(el => el.classList.add("visible"));
});

// 2. Alternar Modo Oscuro
const modoBtn = document.getElementById("modoBtn");
modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    
    // Cambia el icono y texto del botón según el modo
    if(document.body.classList.contains("oscuro")){
        modoBtn.innerHTML = "Modo claro";
    } else {
        modoBtn.innerHTML = "Modo oscuro";
    }
});

// 3. Resaltar menú activo al hacer scroll
const links = document.querySelectorAll(".menu-superior a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;

    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section) {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                links.forEach(l => l.classList.remove("activo"));
                link.classList.add("activo");
            }
        }
    });
});

// 4. Lógica para el botón "Volver arriba"
const btnArriba = document.getElementById("btnArriba");

// Escuchamos el scroll de la ventana
window.addEventListener("scroll", () => {
    // Si bajamos más de 300 píxeles, mostramos el botón. Si no, se oculta.
    if (window.scrollY > 300) {
        btnArriba.classList.add("mostrar");
    } else {
        btnArriba.classList.remove("mostrar");
    }
});

// Al hacer clic en el botón, sube suavemente hasta el inicio (arriba)
btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
