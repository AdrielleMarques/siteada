document.getElementById("enviar").addEventListener ("click",formulario)
function formulario(){
  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}