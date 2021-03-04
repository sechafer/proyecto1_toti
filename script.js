function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let assunto =document.getElementById("assunto");
    let menssagem = document.getElementById("menssagem");


    if (nome.value =="" || nome.value ==null || nome.value.lenght) {
        alert("nome não informado");
    
        nome.focus();
        return false;
    }

    if(email.value.indexOF("@") == -1 || 
        email.valueOf.indexOf(".") == -1 ||
        email.value == "" ||
        email.value == null) {

            alert("Por favor, indique um e-mail válido");
            email.focus();
            return;
        }
    if(assunto.value =="") {
        alert("Assunto não informado");
        assunto.focus();
        return;
    }
    if(menssagem.value =="") {
        alert("Escriva uma menssagem");
        assunto.focus();
        return;
    }
}


//consulta con el servidor
let consulta = new XMLHttpRequest()
consulta.open('GET', 'https://api.github.com/users/sechafer/repos', true)


//generando json
consulta.onload = function () {
  var data = JSON.parse(this.response);
  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.html_url + '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

// envio de informacion
consulta.send();
