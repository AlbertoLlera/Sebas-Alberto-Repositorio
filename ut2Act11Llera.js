//Pruebas cambio
// esta perfecto
/**
 * Inicia una partida simulando turnos entre fichas blancas y negras.
 *
 * La función controla el número total de turnos, muestra en consola qué jugador
 * (blancas o negras) debe mover en cada turno, y cada tres turnos emite un
 * recordatorio para revisar el reloj de juego. Además, lleva un conteo de los
 * movimientos válidos realizados por las piezas negras.
 *
 * @function iniciarpartida
 * @returns {void} No devuelve ningún valor, solo muestra mensajes en consola.
 */
function iniciarpartida() {

    /** @type {number} Representa el turno actual de la partida. */
    let turnoActual = 1;

    /** @constant {number} Número máximo de turnos permitidos en la partida. */
    const turnosMaximos = 10;

    /** @type {number} Contador de los movimientos válidos realizados por las piezas negras. */
    let movValidosNegras = 0;

    // Bucle principal: se ejecuta hasta alcanzar el número máximo de turnos.
    while (turnoActual <= turnosMaximos) {

        // Determina de quién es el turno (blancas o negras) y lo muestra en consola.
        if (esTurnoDeBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> mueven las blancas`);
        } else {
            console.log(`Turno ${turnoActual} -> mueven las negras`);
        }

        // Cada 3 turnos, se muestra un recordatorio y se evalúa si las negras hicieron un movimiento válido.
        if (turnoActual % 3 === 0) {
            console.log(`Recordatorio: revise el reloj de juego`);

            // Si el turno es par (mueven las negras), se incrementa el contador de movimientos válidos.
            movValidoNegras = turnoActual % 2 === 0
                ? (console.log("Las negras hacen un movimiento válido"), movValidosNegras + 1)
                : movValidosNegras;
        }

        // Avanza al siguiente turno.
        turnoActual++;
    }

    // Mensaje final cuando se alcanzan los turnos máximos.
    console.log(`Se alcanzó el máximo de turnos. Partida finalizada`);
}

/**
 * Determina si el turno actual corresponde a las fichas blancas.
 *
 * @function esTurnoDeBlancas
 * @param {number} turno - Número del turno actual.
 * @returns {boolean} Devuelve true si es turno de las blancas (turnos impares), false si es de las negras.
 */
function esTurnoDeBlancas(turno) {
    return turno % 2 !== 0;
}

// Llamada inicial para comenzar la simulación de la partida.
iniciarpartida();
