// O cronômetro será chamado quando for realizadoo load do DOM:

window.onload = () => {
    var hora = 00;
    var minutos = 00;
    var segundos = 00;
    var tens = 00;

    var addHoras = document.getElementById("horas");
    var addMinutos = document.getElementById("minutos");
    var addSegundos = document.getElementById("segundos");
    var addTens = document.getElementById("tens");

    var botaoStart = document.getElementById("button-start");
    var botaoStop = document.getElementById("button-stop");
    var botaoReset = document.getElementById("button-reset");

    // intervalos setados:
    var Interval ;

    //Botão Start:
    botaoStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    botaoStop.onclick = () => {
        clearInterval (Interval);
    }

    botaoReset.onclick = () => {
        clearInterval(Interval);
        hora = "0"
        minutos = "0";
        segundos = "0";
        tens = "00";

        addMinutos.innerHTML = minutos;
        addSegundos.innerHTML = segundos;
        addTens.innerHTML = tens;
    }

    function startTimer () {
        if (tens < 99) {
            tens++;
            if (tens < 10) { tens = "0"+tens}
            addTens.innerHTML =+ tens;
        }
        if (tens == 99) {
            tens = -1;
        }
        if (tens == 0) {
            segundos ++;
            if (segundos < 10) { segundos = "0"+segundos}
            addSegundos.innerHTML =+ segundos;
        }
        if (segundos == 59) {
            segundos = -1;
        }
        if ( (tens == 0)&&(segundos == 0) ) {
            minutos++;
            if (minutos < 10) { minutos = "0"+minutos }
            addMinutos.innerHTML =+ minutos;
        }
        if (minutos == 59) {
            minutos = -1;
        }
        if ( (tens == 0)&&(segundos == 0)&&(minutos == 0) ) {
            hora ++;
            if (hora < 10) { hora = "0"+hora }
            addHoras.innerHTML = hora;
        }
    }
}