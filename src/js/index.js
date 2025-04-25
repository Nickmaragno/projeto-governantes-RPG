
const botoes = document.querySelectorAll(".botao");
const governantes = document.querySelectorAll(".governantes")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaSelecionado = document.querySelector(".botao.selecionado");
        botaSelecionado.classList.remove("selecionado")

        botao.classList.add("selecionado");

        const governantesSelecionado = document.querySelector(".governantes.selecionado");
        governantesSelecionado.classList.remove("selecionado");
        governantes[indice].classList.add("selecionado");

    });

});


