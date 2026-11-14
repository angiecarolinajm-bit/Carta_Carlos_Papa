
// ELEMENTOS DE LA PAGINA

const musica = document.getElementById("musicaFondo");

const boton = document.getElementById("leerCarta");

const carta = document.getElementById("carta");

// CONFIGURACION DE LA MUSICA

musica.volume = 0.65;

// INTENTAR REPRODUCIR AUTOMATICAMENTE AL ABRIR

window.addEventListener("load", () => {

    musica.play().catch(() => {

        console.log(
            "El navegador espera una primera interacción para reproducir la música."
        );

    });

});

// ACCION DEL BOTON LEER MI CARTA

boton.addEventListener("click", async () => {

    // INICIAR MUSICA SI NO ESTA SONANDO

    if (musica.paused) {

        try {

            await musica.play();

        } catch (error) {

            console.log("No se pudo iniciar la música.");

        }

    }

    // DESPLAZAR HACIA LOS RECUERDOS

    carta.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

    // CAMBIAR TEXTO DEL BOTON

    boton.textContent = "Nuestros recuerdos ♡";

});

// VERIFICAR FOTOGRAFIAS

document.querySelectorAll(".imagen img").forEach((foto) => {

    foto.addEventListener("error", () => {

        console.log(
            "No se encontró la fotografía:",
            foto.getAttribute("src")
        );

    });

});