
//Cambiar variable de ejemplo por correo real
ejemplo@gmail.com → Cambiar al mail verdadero

if(isset($_POST['enviar'])){
  
    // Información del formulario
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $mensaje = $_POST['mensaje'];
  
  // Destinatario del correo electrónico
  $destinatario = "ejemplo@gmail.com";
  
  // Asunto del correo electrónico
  $asunto = "Nuevo mensaje del formulario de contacto";
  
  // Cuerpo del correo electrónico
  $cuerpo = "Nombre: " . $nombre . "\n";
  $cuerpo .= "Correo electrónico: " . $correo . "\n";
  $cuerpo .= "Mensaje: " . $mensaje . "\n";
  
  // Enviar correo electrónico
  if(mail($destinatario, $asunto, $cuerpo)){
    echo "Gracias por su mensaje. Nos pondremos en contacto con usted pronto.";
  } else{
    echo "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.";
  }
}