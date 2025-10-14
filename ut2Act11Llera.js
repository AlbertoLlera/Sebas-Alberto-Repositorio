//Pruebas cambio
function iniciarpartida() {

    let turnoActual = 1;
    const turnosMaximos = 10;
    let movValidosNegras = 0;

    while (turnoActual <= turnosMaximos) {

        if (esTurnoDeBlancas(turnoActual)){
            console.log(`Turno ${turnoActual} -> mueven las blancas`);
        }
        else{
            console.log(`Turno ${turnoActual} -> mueven las negras`);
        }

        if (turnoActual%3 === 0){
            console.log(`Recordatorio: revise el reloj de juego`);

            movValidoNegras = turnoActual % 2 === 0 ? (console.log("Las negras " +
                "hacen un movimiento válido"), movValidosNegras+1) : movValidosNegras;

        }

        turnoActual++;
    }

    console.log(`Se alcanzó el máximo de turnos. Partida finalizada`);

}

function esTurnoDeBlancas(turno){

    return turno % 2 !== 0;

}

iniciarpartida();