//Declarando variaveis

/* //Diferenca entre var e let
var nome = "Adalto";
let sobrenome = "Nagabe";



if(true){
    //redirecionando as variaveis
    var nome = "Joao";
    let sobrenome = "Silva";
}

console.log(nome);
console.log(sobrenome); */


const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){
    e.preventDefault();
    const email = document.getElementById("IdEmail");
    const senha = document.getElementById("IdSenha");

    let usuario = {
    email: email.value,
    senha: senha.value

}

    console.log(usuario.email);
    console.log(usuario.senha);


    //Validacao de dados do usuario
    //Crie um novo objeto com as propriedades email e senha
    //Compare contra os dados do usuario
    //Crie uma validacao para os campos de email e senha
    //Se a validacao for bem sucedida exibir mensagem de sucesso caso contrario exiba a mensagem de erro


});
