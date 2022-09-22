function mostraAviso() /*ALERTA DE CONTAS NÃO DISPONIVEIS*/
{
    alert("CONTAS NÃO DISPONÍVEIS!");
}

window.onload=function(){
    let botaoAviso = document.getElementById("login-form-button");

    botaoAviso.onclick = function () {
        mostraAviso() ;
    };
}