function verificarFrecuenciaCardiaca() {
    let input;
    let resultado = "";

    while (true) {
        input = prompt("Ingrese su frecuencia cardíaca (o ingrese 'salir' para finalizar):");

        if (input.toLowerCase() === "salir") {
            alert("Has salido del programa.");
            break;
        }

        let bpm = parseInt(input);

        if (!isNaN(bpm) && bpm > 0) {
            if (bpm >= 60 && bpm <= 100) {
                resultado = "Su frecuencia cardíaca está en el rango normal.";
            } else if (bpm < 60) {
                resultado = "Su frecuencia cardíaca está por debajo del rango normal.";
            } else {
                resultado = "Su frecuencia cardíaca está por encima del rango normal.";
            }
            alert(resultado);
        } else {
            alert("Por favor, ingresa un valor válido.");
        }
    }
}

verificarFrecuenciaCardiaca();
