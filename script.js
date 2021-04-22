function validacion() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asunto =document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");


    if (nombre.value =="" || nombre.value ==null || nombre.value.lenght) {
        alert("Debe colocar un nombre");
    
        nome.focus();
        return false;
    }

    if(email.value.indexOF("@") == -1 || 
        email.valueOf.indexOf(".") == -1 ||
        email.value == "" ||
        email.value == null) {

            alert("Favor colocar un correo válido");
            email.focus();
            return;
        }
    if(asunto.value =="") {
        alert("Favor llenar el espacio del asunto");
        assunto.focus();
        return;
    }
    if(mensaje.value =="") {
        alert("Escriba un mensaje");
        assunto.focus();
        return;
    }
    nombre.value = '';
    email.value = '';
    asunto.value = '';
    mensaje.value = '';
}