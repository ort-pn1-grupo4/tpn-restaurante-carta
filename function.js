
function setMinDate() {
    const fecha =  new Date().toJSON().split('T')[0];
    document.getElementById("fecha").setAttribute('min',fecha);
}

function enviarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
  
    // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById("fname").value;
    let celular = document.getElementById("celular").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let cantPersonas = document.getElementById("cantidad").value;


    //console.log(document.getElementById("fname").value);
    

    alert(" Nombre: " + nombre+ "\n Celular: "+celular+ "\n Fecha: "+fecha+ "\n Hora: "+hora+"\n Cantidad de Personas: "+cantPersonas );
  
    // Concatena los valores en una cadena
    // var mensajeAlerta = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;
  
    // Muestra el mensaje de alerta con los datos del formulario
    alert(mensajeAlerta);
  
    // Lógica adicional para enviar el formulario a través de AJAX o hacer otra tarea después del envío
  }




