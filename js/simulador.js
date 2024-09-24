let bpm;
let resultado = "";

// Repetir hasta que el usuario ingrese un número válido
while (true) {
    bpm = parseInt(prompt("Ingrese su frecuencia cardíaca")); // Convertir a número

    if (!isNaN(bpm) && bpm > 0) { // Verificar que bpm es un número y mayor que 0
        if (bpm >= 60 && bpm <= 100) {
            resultado = "Tu frecuencia cardíaca está en el rango normal.";
        } else if (bpm < 60) {
            resultado = "Tu frecuencia cardíaca está por debajo del rango normal.";
        } else {
            resultado = "Tu frecuencia cardíaca está por encima del rango normal.";
        }
        break; // Salir del bucle si el valor es válido
    } else {
        alert("Por favor, ingresa un valor válido.");
    }
}

console.log(resultado);