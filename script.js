(function () {
    const items = document.querySelectorAll('.timeline ul li');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const callbackFunc = () => {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            } else {
                items[i].classList.remove("in-view"); // Eliminar clase si el elemento no está en la vista
            }
        }
    };

    // Escuchar eventos
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();




// Selecciona el botón de modo oscuro
const darkModeButton = document.querySelector('.dark-mode');

// Agrega un evento al botón que cambia el modo
darkModeButton.addEventListener('click', () => {
    // Cambia la clase del body y de la navbar al hacer clic
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');

    // Cambia el ícono del botón de modo oscuro
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.innerHTML = '🌙'; // Cambia a ícono de luna
    } else {
        darkModeButton.innerHTML = '🔆'; // Cambia a ícono de sol
    }
});

//EFECTO TYPING
//EFECTO TYPING
const texto = " Hola! Soy Mafe Saavedra";
const tipo = document.querySelector(".typing");
let idx = 0;

function escribirTexto() {
    if (idx < texto.length) {
        tipo.textContent += texto[idx];
        idx++;
    } else {
        setTimeout(() => {
            idx = 0;
            tipo.textContent = "";
        }, 1000); // Pausa de 2 segundos
    }

    if (idx < texto.length) {
        setTimeout(escribirTexto, 150);
    } else {
        setTimeout(escribirTexto, 1000); // Pausa de 2 segundos
    }
}

escribirTexto();