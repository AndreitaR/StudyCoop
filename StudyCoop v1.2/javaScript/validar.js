/* Funciones */
/* Declaración de una función */
function contraseniaValida(contrasenia) {
    // Expresión regular para validar que la contraseña tenga al menos:
    // - 1 letra minúscula
    // - 1 letra mayúscula
    // - 2 dígitos
    // - 2 caracteres especiales
    // - No espacios en blanco
    var patronContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>])[^\s]{8,}$/;
    if(contrasenia.length < 7){
        return false;
    }
    if(patronContrasenia.test(contrasenia)){
        return true;
    } else {
        return false;
    }
}

function correoValido(email){
    var patronEmail = /^[^\d][^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Define una expresión regular para validar el formato del correo electrónico
    if(patronEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}

function contenidoValido(contenido, cantPermitidaCaracteres) {
    var regularExpContenido = /[!@#$%^&*(),.?":{}|<>]/g; // validar cantidad de caracteres especiales permitidos
    var cantCaracteresEspeciales = (contenido.match(regularExpContenido) || []).length; // sirve para contar los caracteres utilizados en textarea
  
    if (cantCaracteresEspeciales > cantPermitidaCaracteres) {
      return true;
    } else {
      return false;
    }
}
