let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar input

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar nombres de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Debe haber al menos un participante para el sorteo.");
        return;
    }

    const elegido = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultado(elegido);
}

function mostrarResultado(nombre) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombre}</strong> 🎉</li>`;
}
