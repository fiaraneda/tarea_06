function MostrarAlerta() {
    alert("Hizo Clixck!");
}

function HacerClick() {
    document.getElementById('boton-enviar')[0].onclick = MostrarAlerta();
}

function ValidaNombre() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if (nombre.length < 5) {
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    } else {
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}