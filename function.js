function enviarFormulario(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtiene los valores de los campos del formulario
  let nombre = document.getElementById("fname").value;
  let celular = document.getElementById("celular").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let cantPersonas = document.getElementById("cantidad").value;

  //console.log(document.getElementById("fname").value);

  let mensajeAlerta = 
    " Nombre: " +
      nombre +
      "\n Celular: " +
      celular +
      "\n Fecha: " +
      fecha +
      "\n Hora: " +
      hora +
      "\n Cantidad de Personas: " +
      cantPersonas;

  // Concatena los valores en una cadena
  // var mensajeAlerta = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;

  // Muestra el mensaje de alerta con los datos del formulario
  alert(mensajeAlerta);

  // Lógica adicional para enviar el formulario a través de AJAX o hacer otra tarea después del envío
}

function setearValidacionCelular() {
  //REGEX PARA CELULAR
  document.getElementById("celular").setAttribute("pattern", "[0-9]{10}");
}
function setearValidacionFecha() {
  const fecha = new Date().toJSON().split("T")[0];
  document.getElementById("fecha").setAttribute("min", fecha);
}

function setearValidacionHora() {
  document.getElementById("hora").setAttribute("min", "09:00");
  document.getElementById("hora").setAttribute("max", "23:00");
}

function setearValidacionCantidad() {
  document.getElementById("cantidad").setAttribute("min", "1");
  document.getElementById("cantidad").setAttribute("max", "8");
}

/**
 * Setea todas las validaciones de los campos del formulario
 */
function setearValidaciones() {
  setearValidacionCelular();
  setearValidacionFecha();
  setearValidacionHora();
  setearValidacionCantidad();
}
