const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iidade = document.querySelector(".idade");
const Isalario = document.querySelector(".salario");

function cadastrar () {

    fetch("http://localhost:8080/usuarios",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            idade: Iidade.value,
            salario: Isalario.value
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

function limpar () {
    Inome.value = "";
    Iidade.value = "";
    Isalario.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

   cadastrar();
   limpar();
   
});
