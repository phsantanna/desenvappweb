
// esse script evita com que a animação de email e senha desçam quando os inputs tiverem algo escrito nos campos
// usei let para que não haja alteração na variavel inputs, criei uma estrutura condicional para caso o input
//esteja preenchido, o efeito permanece ativo, caso contrario, ele desativa
let inputs = document.getElementsByClassName("input-form");/*pega todos inputs do */
                                        /*formulario (email e senha) e verifica se está com o efeito ativo*/
for (let input of inputs){ 
    input.addEventListener("blur", function(){/*pra cada input declaro um evento blur, ele é acionado quando foco do campo é retirado*/
        if(input.value.trim() != ""){/*se o valor do input for diferente de vazio, adicione a classe hal-val*/
                                    /*mantendo o estilo do campo como se estivesse sendo focado*/
            input.classList.add("has-val");
    } else{                                /* se não, remove a classe has-val*/
        input.classList.remove("has-val");
    }
});
}