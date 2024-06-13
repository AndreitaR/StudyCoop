$(document).ready(function(){//ejecuta el codigo una vez que el documento HTML esta completamente cargado
    $('#loginForm').on('submit', function (event){
        // Agrega un evento que se activa cuando el formulario con id 'loginForm' se envia

        event.preventDefault();
        // Previene el comportamiento predeterminado del formulario, que es recargar la pagina

        var email = $('#email').val();
        var password = $('#password').val();
        // Obtiene los valores de los campos de entrada con id 'email' y 'password'

        if(!email || !password){
            // Verifica si alguno de los campos está vacío

            window.alert('Por favor complete todos los campos.');
            // Muestra una alerta pidiendo al usuario que complete todos los campos

            return;
            // Detiene la ejecución del código si los campos están vacíos
        }
        var patronEmail = /^[^\d][^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Define una expresión regular para validar el formato del correo electrónico

        if(!patronEmail.test(email)){
            // Prueba si el valor del email coincide con el patrón de la expresión regular

            window.alert('Por favor ingrese un correo valido, recuerde que no puede empezar con un número.');
            // Muestra una alerta si el formato del correo es incorrecto

            return;
            // Detiene la ejecución del código si el correo no es válido
        }
        if(password.length < 7){
            // Verifica si la longitud de la contraseña es menor a 7 caracteres

            window.alert('La contraseña debe ser mayor a 7 dígitos.');
            // Muestra una alerta indicando que la contraseña debe ser más larga
            
            return;
            // Detiene la ejecución del código si la contraseña es demasiado corta
        }
        // Expresión regular para validar que la contraseña tenga al menos:
        // - 1 letra minúscula
        // - 1 letra mayúscula
        // - 2 dígitos
        // - 2 caracteres especiales
        // - No espacios en blanco
        var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>])[^\s]{8,}$/;

        if(!regexPassword.test(password)){
            window.alert('La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula, 2 números, 2 caracteres especiales, y no debe contener espacios.');
            return;
        }
            this.submit();
            // Si todas las validaciones pasan, envía el formulario
});
            $('#togglePassword').on('click', function(){
                // Agrega un evento que se activa cuando el botón para mostrar/ocultar la contraseña es clickeado
                var passwordField = $('#password');
                var passwordFieldType = passwordField.attr('type');
                // Obtiene el tipo de entrada del campo de contraseña
        
                if(passwordFieldType === 'password'){
                    // Si el tipo es 'password', cámbialo a 'text' para mostrar la contraseña
                    passwordField.attr('type', 'text');
                    $(this).text('Ocultar contraseña');
                } else {
                    // Si el tipo es 'text', cámbialo a 'password' para ocultar la contraseña
                    passwordField.attr('type', 'password');
                    $(this).text('Mostrar contraseña');
                }
    });
});
