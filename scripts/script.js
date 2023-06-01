var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivinarNumero() {
    var numero = parseInt(document.getElementById("numero").value);
    var mensaje = document.getElementById("mensaje");
    intentos++;
    
    if (numero > numeroAleatorio) {
        mensaje.textContent = "El número es mayor. Intenta otro.";
    } else if (numero < numeroAleatorio) {
        mensaje.textContent = "El número es menor. Intenta otro.";
    } else {
        mensaje.textContent = "¡Felicitaciones! Adivinaste el número en " + intentos + " intentos.";
        document.getElementById("adivinar").disabled = true;
    }
}