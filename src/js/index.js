const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgTrocaBotao = document.querySelector(".img-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");

        imgTrocaBotao.setAttribute("src", "./src/imagens/sun.png");
    }

    else {
        body.classList.add("modo-escuro");
        imgTrocaBotao.setAttribute("src", "./src/imagens/moon.png");
    }
    
});

