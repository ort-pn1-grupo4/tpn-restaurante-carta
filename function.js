
function setMinDate() {
    const fecha =  new Date().toJSON().split('T')[0];
    document.getElementById("fecha").setAttribute('min',fecha);
}


function mostrarReserva(){
    const formulario = document.getElementById('#formulario');
    const nombre = formulario.getElementById('#fname').innerHTML
    alert("Hola "+ nombre );
}

function enviarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
  
    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("fname").value;
    //var email = document.getElementById("").value;
    //var mensaje = document.getElementById("mensaje").value;
  
    // Concatena los valores en una cadena
    var mensajeAlerta = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;
  
    // Muestra el mensaje de alerta con los datos del formulario
    alert(mensajeAlerta);
  
    // Lógica adicional para enviar el formulario a través de AJAX o hacer otra tarea después del envío
  }
