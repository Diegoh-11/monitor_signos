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

// ── Función 2: Clasificar el BPM ────────────────
function clasificarBpm(bpm) {
    if (bpm < 40 || bpm > 130) {
        return "critico";
    } else if (bpm < 60 || bpm > 100) {
        return "leve";
    } else {
        return "normal";
    }
}

// ── Función 3: Mostrar resumen final ────────────
function mostrarResumen() {
    let promedio = totalBpm / lecturas;

    console.log("=== RESUMEN DE LA MISIÓN ===");
    console.log("Ritmo cardíaco promedio: " + promedio.toFixed(2) + " BPM");
    console.log("Alertas leves: " + alertasLeves);
    console.log("Emergencias críticas: " + criticos);
}

// ── Función 4: Ciclo principal ──────────────────
function iniciarMision() {
    console.log("Misión iniciada. Monitoreando signos vitales...");

    while (misionActiva) {
        let bpm = pedirBpm();

        // Terminar misión de forma segura
        if (bpm < 0) {
            console.log("Misión finalizada de forma segura.");
            mostrarResumen();
            misionActiva = false;
            break;
        }

        // Acumular datos para el promedio
        totalBpm = totalBpm + bpm;
        lecturas = lecturas + 1;

        // Clasificar el BPM
        let clasificacion = clasificarBpm(bpm);

        if (clasificacion === "critico") {
            console.log("🔴 PELIGRO CRÍTICO: BPM fuera de rango seguro.");
            criticos = criticos + 1;

            if (criticos === 3) {
                console.log("ESTADO CRÍTICO: CAMINATA ABORTADA");
                misionActiva = false;
                break;
            }

        } else if (clasificacion === "leve") {
            alertasLeves = alertasLeves + 1;

            if (bpm < 60) {
                console.log("⚠️ Alerta: Hipotermia o Bradicardia leve.");
            } else {
                console.log("⚠️ Alerta: Taquicardia leve.");
            }

        } else {
            console.log("✅ Ritmo normal: " + bpm + " BPM.");
        }
    }
}

// ── Arrancar el programa ────────────────────────
iniciarMision();
