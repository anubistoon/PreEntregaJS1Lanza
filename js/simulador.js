let bpm = parseInt(prompt("Ingrese su frecuencia cardíaca")); // Convertir a número
let resultado = "";

if (!isNaN(bpm) && bpm > 0) { // Verificar que bpm es un número y mayor que 0
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
console.log(resultado);
