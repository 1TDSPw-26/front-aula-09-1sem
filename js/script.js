//Criando uma lista de objetos:
const usuarios = [
    {id: 1, email: "email@email.com", senha: "12345", nome:"Jose das Couves", avatar="https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 2, email: "nadir@email.com", senha: "12345", nome:"Nadir das Batatas", avatar="https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 3, email: "joel@email.com", senha: "12345", nome:"Joel da Candida", avatar="https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 4, email: "tonho@email.com", senha: "12345", nome:"Antonio das Alfaces", avatar="https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 5, email: "jo@email.com", senha: "12345", nome:"Joaquim das Jacas", avatar="https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
];

//Compare os dados do form contra a lista de usuarios
//Utilize estrutura de repeticao
//Imprima a lista de usuarios





const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){

    e.preventDefault();
    //Capturando dados do campo de email e senha
    const email = document.getElementById("IdEmail");
    const senha = document.getElementById("IdSenha");

    //Declarando um ojeto:    
    let usuario = {
    email: email.value,
    senha: senha.value
    }

    console.log( usuario.email );
    console.log( usuario.senha );

    const userDoBanco = {
        email : "email@email.com",
        senha : "12345",
        nome : "Jose das Couves",
        avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
    }

    //Validacao de dados do usuario

    try {
        if(usuario !== null){
            if((usuario.email === userDoBanco.email) && (usuario.senha === userDoBanco.senha)){
                alert("Login realizado com sucesso!");

                //Informando o usuario que ele sera direcionado!
                const divMsg = document.getElementById("msg");

                //Adicionando a mensagem em um <p></p> atraves de innerHTML
                divMsg.innerHTML = "<p>Voce sera redirecionado em 5 segundos...</p>"

                setTimeout( function(){
                    //Refirecionando o usuario para a pagina inicial!
                    window.location.href = "../index.html";
                },5000);


            }else{
               throw new Error("Email ou senha incorretos!")
            }
        }else{
            throw new Error("Usuario nao encontrado")    
        }
    
    } catch (error){
        console.error(error);
        alert(error);
    }
    

    
    



    //Crie um novo objeto com as propriedades email e senha
    //Compare contra os dados do usuario
    //Crie uma validacao para os campos de email e senha
    //Se a validacao for bem sucedida exibir mensagem de sucesso caso contrario exiba a mensagem de erro


});
