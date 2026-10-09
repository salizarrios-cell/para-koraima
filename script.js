const preguntas = [
    {
        texto: "1. ¿Me amas?",
        opciones: [
            { texto: "Sí", mensaje: "Te amo" },
            { texto: "No", mensaje: "Ok" }
        ]
    },
    {
        texto: "2. ¿Te gusta pasar tiempo conmigo?",
        opciones: [
            {
                texto: "Sí, me encanta",
                mensaje: "A mí también, mi vida"
            },
            {
                texto: "A veces",
                mensaje: "Sisisisis"
            },
            {
                texto: "No",
                mensaje: "Ok"
            }
        ]
    },
    {
        texto: "3. ¿Qué es lo que más te gusta hacer conmigo?",
        escribir: true,
        mensaje: "okis, a mi gusta cuando me das muchos besitos"
    },
    {
        texto: "4. ¿Te vendrías a vivir conmigo?",
        opciones: [
            {
                texto: "Sí, contigo me voy hasta el fin del mundo",
                mensaje: "Muaa"
            },
            {
                texto: "No, vete a vivir solo",
                mensaje: "Okkkkk"
            }
        ]
    },
    {
        texto: "5. ¿Te casarías conmigo?",
        opciones: [
            {
                texto: "Sí",
                mensaje: "Tendremos muchos hijos"
            },
            {
                texto: "No",
                mensaje: "Sisisisisisi"
            }
        ]
    }
];

let actual = 0;

const pregunta = document.getElementById("pregunta");
const respuestas = document.getElementById("respuestas");
const mensaje = document.getElementById("mensaje");
const siguiente = document.getElementById("siguiente");

function mostrarPregunta() {
    mensaje.innerHTML = "";
    respuestas.innerHTML = "";
    siguiente.innerHTML = "";

    if (actual >= preguntas.length) {
        pregunta.style.display = "none";
        document.getElementById("final").style.display = "block";
        return;
    }

    pregunta.style.display = "block";

    const p = preguntas[actual];
    pregunta.textContent = p.texto;

    if (p.escribir) {
        const campo = document.createElement("textarea");
        campo.rows = 4;
        campo.placeholder = "Escribe tu respuesta aquí...";

        const boton = document.createElement("button");
        boton.textContent = "Enviar respuesta";

        boton.onclick = function() {
            if (campo.value.trim() === "") {
                alert("Escribe tu respuesta primero");
                return;
            }

            mostrarMensaje(p.mensaje);
        };

        respuestas.appendChild(campo);
        respuestas.appendChild(document.createElement("br"));
        respuestas.appendChild(boton);

    } else {
        p.opciones.forEach(function(opcion) {
            const boton = document.createElement("button");
            boton.textContent = opcion.texto;

            boton.onclick = function() {
                mostrarMensaje(opcion.mensaje);
            };

            respuestas.appendChild(boton);
        });
    }
}

function mostrarMensaje(texto) {
    respuestas.innerHTML = "";
    mensaje.innerHTML = "";

    const resultado = document.createElement("p");
    resultado.className = "mensaje";
    resultado.textContent = texto;
    mensaje.appendChild(resultado);

    const boton = document.createElement("button");

    boton.textContent =
        actual === preguntas.length - 1
        ? "Ver nuestra foto"
        : "Siguiente pregunta";

    boton.onclick = function() {
        actual++;
        mostrarPregunta();
    };

    siguiente.appendChild(boton);
}

mostrarPregunta();