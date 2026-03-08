// ── Variables globales ──────────────────────────
let criticos = 0;
let alertasLeves = 0;
let totalBpm = 0;
let lecturas = 0;
let misionActiva = true;

// ── Función 1: Pedir y validar el BPM ──────────
function pedirBpm() {
    let entrada = prompt("Ingresa el ritmo cardiaco del astronauta (BPM).\nNúmero negativo para terminar misión:");
    let bpm = parseFloat(entrada);

    if (isNaN(bpm)) {
        alert("Dato inválido. Debes ingresar un número.");
        return pedirBpm();
    }

    return bpm;
}

