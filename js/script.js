const usuarios = [
    {Id: 1, email:"email@email.com", senha:"12345", nome:"José das Couves", avatar:"https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {Id: 2, email:"nadir@email.com", senha:"12345", nome:"Nadir das Batatas", avatar:"https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {Id: 3, email:"joel@email.com", senha:"12345", nome:"Joel da Candida", avatar:"https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {Id: 3, email:"email@email.com", senha:"12345", nome:"José das Couves", avatar:"https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
];

const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){
    e.preventDefault();
    //Capturando dados do campo de email e senha
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");
    
    //Declarando um objeto:
    let usuario = {
        email: email.value,
        senha: senha.value
    }

    console.log( usuario.email );
    console.log( usuario.senha );


    const userDoBanco = {
        email  :  "email@email.com",
        senha  : "12345",
        nome   : "José das Couves",
        avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
    }

    //Validação de dados do usuário
    
    try {
        if(usuario !== null){
            if( (usuario.email === userDoBanco.email) && (usuario.senha === userDoBanco.senha) ){
                alert("Login realizado com sucesso!");
                
                const divMsg = document.getElementById("msg")

                divMsg.innerHTML = "<p>Você será redirecionado em cinco segungos...</p>"

                setTimeout( function(){
                    window.location.href = "../index.html";
                }, 5000);
            }else{
                throw new Error("Email ou senha incorretos.")
            }
        } else{
            throw new Error("Usuário não encontrado.")
        }
        
    } catch (error) {
        console.error(error);
        alert(error)
    }



    //Crie um novo objeto com as propriedades email e senha.
    //Compare contra os dados do usuário.
    //Crie uma validação para os campos de e-mail e senha.
    //Se a validacão for bem sucedida, exibir mensagem de sucesso, caso contrário, exiba mensagem de erro.



}); 








