const botao = document.getElementById("btn1");
botao.style.backgroundColor = "red";

var input = document.getElementById("meuInput")

function imprimirInput(){
    console.log(input.value)
}
var lista = document.getElementsByTagName("ul")
function adicionarElementosLista(){
    lista[0].innerHTML += "<li>"+input.value+"</li>"
}