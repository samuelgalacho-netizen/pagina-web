alert("JavaScript funcionando!");
// Seleciona todos os botões
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {

    let clicado = false;

    botao.addEventListener("click", function() {

        const numero = botao.querySelector("span");

        if (clicado === false) {

            numero.textContent =
                Number(numero.textContent) + 1;

            clicado = true;

        } else {

            numero.textContent =
                Number(numero.textContent) - 1;

            clicado = false;
        }

    });

});


