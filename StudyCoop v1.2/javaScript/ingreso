/*para acceder al elemento html "document.getElementById()"
 espera a que ocurra un evento, en este caso 'submit', cuando el formulario se manda ".addEventListener('submit', function(event)"
 el parametro event representa el evento que ocurrio "function(event)"
*/
document.getElementById('loginForm').addEventListener('submit', function(event){
    try{
        //obtener los valores de los campos email y password
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        if(!email || !password){//verifico si estan vacios
            throw new Error('Por favor complete todos los campos.');
        }
        //verificar el patron del correo
        var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //con esto nos aseguramos de que sigan el formato 'nombre@dominio.com'
        if(!patronEmail.test(email)){//.test(email) prueba si el valor del email coincide con patronEmail
            throw new Error('Por favor ingrese un correo valido.');
        }
        //verificar la longitud de la contraseña
        if(password.length<7){//si tene menos de 7 caracteres
            throw new Error('La contraseña debe ser mayor a 7 digitos.');
            return;
        }           
    }catch(error){
        alert(error.message);//muestra el mensaje de error
        event.preventDefault();//evita que el formulario se envie
    }
});
