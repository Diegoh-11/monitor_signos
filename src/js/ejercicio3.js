// ── Variables globales ──────────────────────────
let totalPagado = 0;

// ── Función 1: Pedir y validar datos ────────────
function pedirDatos(mensaje) {
    let entrada = prompt(mensaje);
    let valor = parseFloat(entrada);

    if (isNaN(valor) || valor <= 0) {
        alert("Dato inválido. Debes ingresar un número positivo.");
        return pedirDatos(mensaje);
    }

    return valor;
}

// ── Función 2: Calcular cuota con interés ───────
function calcularCuota(cuotaBase, mes) {
    if (mes <= 6) {
        return cuotaBase * 1.05;
    } else {
        return cuotaBase * 1.08;
    }
}

// ── Función 3: Mostrar cronograma ───────────────
function mostrarCronograma(cuotaBase, meses) {
    console.log("=== CRONOGRAMA DE PAGOS ===");

    for (let mes = 1; mes <= meses; mes++) {
        let cuota = calcularCuota(cuotaBase, mes);
        totalPagado = totalPagado + cuota;
        console.log("Mes " + mes + ": $" + cuota.toFixed(2));
    }
}

// ── Función 4: Mostrar resumen final ────────────
function mostrarResumen(monto) {
    let totalIntereses = totalPagado - monto;

    console.log("=== RESUMEN DEL CRÉDITO ===");
    console.log("Monto prestado:     $" + monto.toFixed(2));
    console.log("Total en intereses: $" + totalIntereses.toFixed(2));
    console.log("Gran total a pagar: $" + totalPagado.toFixed(2));
}

// ── Función 5: Flujo principal ──────────────────
function iniciarPrestamo() {
    let monto = pedirDatos("¿Cuánto dinero desea pedir prestado?");
    let meses = pedirDatos("¿A cuántos meses desea diferir el pago?");

    let cuotaBase = monto / meses;

    console.log("Monto: $" + monto + " | Meses: " + meses + " | Cuota base: $" + cuotaBase.toFixed(2));

    mostrarCronograma(cuotaBase, meses);
    mostrarResumen(monto);
}

// ── Arrancar el programa ────────────────────────
iniciarPrestamo();
