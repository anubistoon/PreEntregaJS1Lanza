let bpm;
let resultado = "";

while (true) {
    bpm = parseInt(prompt("Ingrese su frecuencia cardíaca"));

    if (!isNaN(bpm) && bpm > 0) {
        if (bpm >= 60 && bpm <= 100) {
            resultado = "Tu frecuencia cardíaca está en el rango normal.";
        } else if (bpm < 60) {
            resultado = "Tu frecuencia cardíaca está por debajo del rango normal.";
        } else {
            resultado = "Tu frecuencia cardíaca está por encima del rango normal.";
        }
        break;
    } else {
        alert("Por favor, ingresa un valor válido.");
    }
}

alert(resultado);
