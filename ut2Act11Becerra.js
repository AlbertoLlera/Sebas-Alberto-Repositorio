// Función auxiliar
function esTurnoDeBlancas(turno) {
    return turno % 2 !== 0; // impar = blancas
}

// Función principal
function iniciarPartida() {
    let turnoActual = 1;
    const turnosMaximos = 10;
    let movimientosValidos = 0;

    while (turnoActual <= turnosMaximos) {

        if (esTurnoDeBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} → Mueven las ♙ blancas`);
        } else {
            console.log(`Turno ${turnoActual} → Mueven las ♟ negras`);
        }

        // Cada 3 turnos
        if (turnoActual % 3 === 0) {
            console.log(" Recordatorio: revisa el reloj de juego.");
        }

        // Contador de movimientos válidos (solo para turnos pares)
        movimientosValidos += (turnoActual % 2 === 0) ? 1 : 0;

        // Al llegar al final
        if (turnoActual === turnosMaximos) {
            console.log("🏁 Se alcanzó el número máximo de turnos. Partida finalizada.");
        }

        turnoActual++;
    }

    // Mostrar resumen
    console.log(`Movimientos válidos realizados: ${movimientosValidos}`);
}

// Ejecutar la partida
iniciarPartida();
