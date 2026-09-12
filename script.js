const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");


// Quando clicar em "Sim"
botaoSim.addEventListener("click", function () {

    mensagem.textContent = "encontro marcado com sucesso! 💗";

    botaoSim.style.display = "none";
    botaoNao.style.display = "none";

});


// Faz o botão "Não" fugir do cursor
document.addEventListener("mousemove", function (evento) {

    const rect = botaoNao.getBoundingClientRect();

    const mouseX = evento.clientX;
    const mouseY = evento.clientY;

    // Centro do botão
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    // Distância entre o cursor e o botão
    const distancia = Math.sqrt(
        Math.pow(mouseX - centroX, 2) +
        Math.pow(mouseY - centroY, 2)
    );

    // Se o cursor chegar perto...
    if (distancia < 100) {

        // Nova posição aleatória
        const novaX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
        const novaY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

        botaoNao.style.position = "fixed";

        botaoNao.style.left = novaX + "px";
        botaoNao.style.top = novaY + "px";
    }

});