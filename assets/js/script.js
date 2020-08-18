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