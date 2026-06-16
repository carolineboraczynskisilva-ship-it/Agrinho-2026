// Seleciona todos os cards
const cards = document.querySelectorAll(".card");

// Adiciona evento de clique em cada card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});

// Exemplo de mensagem no console
console.log("JavaScript carregado com sucesso!");
