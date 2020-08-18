//var - é de escopo global, todo o meu codigo pode acessar
//let - é apenas de escopo localStorage, então só num determinado lugar poderá ser acessado
//const -escopo global e de valores constantes, que não irão mudar

/*
Case sensitive

por tag: getElementsByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector() - mais usual
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

nome.style.width = "100%" // mudando o campo para 100% de width
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome () {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
    }
}


function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
 
    if (assunto.value.length >= 200) {
       txtAssunto.innerHTML = "O texto é muito grande, digite no máximo 200 caracteres"
       txtAssunto.style.color = "red"
       txtAssunto.style.display = "block"
    } else {
       txtAssunto.style.display = "none"
    }
 }
 
 function enviar() {
    if(txtNome.innerHTML == "Nome Válido" && txtEmail.innerHTML == "E-mail Válido") {
        alert ("Formulário enviado com sucesso!")
    } else {
       alert ("Preencha o formulário corretamente antes de enviar...")
    }
 }
 
 function mapaZoom() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
 }
 
 function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
 }