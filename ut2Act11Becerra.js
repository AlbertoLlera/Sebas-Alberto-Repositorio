/**
 *
 * @param turno recibe el turno.
 * @returns {boolean} devuelve, según el resto de la división, si es turno o no de las blancas.
 * Este comentario lo ha hecho Alberto.
 */
function esTurnoDeBlancas(turno) {
    return turno % 2 !== 0; // impar = blancas
}

/**
 * Función void, no recibe ni devuelve ningún parámetro.
 * Determina de quien es el turno, el número del mismo y la cantidad de movimientos permitidos en la partida.
 * Este comentario lo ha hecho Alberto.
 */
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

        if (turnoActual % 3 === 0) {
            console.log("Recordatorio: revisa el reloj de juego.");
        }

        movimientosValidos += (turnoActual % 2 === 0) ? 1 : 0;

        if (turnoActual === turnosMaximos) {
            console.log("🏁 Se alcanzó el número máximo de turnos. Partida finalizada.");
        }

        turnoActual++;
    }

    console.log(`Movimientos válidos realizados: ${movimientosValidos}`);
}

iniciarPartida();
