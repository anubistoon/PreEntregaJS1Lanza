function calcularFrecuencia() {
    let bpm = document.getElementById('bpm').value;
    let resultado = "";

    if (bpm > 0) {
        if (bpm >= 60 && bpm <= 100) {
            resultado = "Tu frecuencia cardíaca está en el rango normal.";
        } else if (bpm < 60) {
            resultado = "Tu frecuencia cardíaca está por debajo del rango normal.";
        } else {
            resultado = "Tu frecuencia cardíaca está por encima del rango normal.";
        }
    } else {
        resultado = "Por favor, ingresa un valor válido.";
    }

    document.getElementById('resultado').innerHTML = resultado;
}