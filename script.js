// 1. Seleciona todos os links do menu que apontam para um ID
const linksMenu = document.querySelectorAll('nav a[href^="#"]');

// 2. Função para o deslize suave
linksMenu.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o pulo brusco padrão
        
        const id = this.getAttribute('href'); // Pega o destino (ex: #projetos)
        const target = document.querySelector(id); // Localiza o elemento na página
        
        target.scrollIntoView({
            behavior: 'smooth' // Faz o movimento ser suave
        });
    });
});

// 3. Efeito de aparecer ao rolar (Scroll Reveal)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.projeto-card');
    const triggerBottom = window.innerHeight * 0.8; // Define o ponto de ativação

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});