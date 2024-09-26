// Exemplo básico para filtrar filmes
const movies = document.querySelectorAll('.movie');

document.querySelector('.search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    movies.forEach(movie => {
        const title = movie.querySelector('h3').innerText.toLowerCase();
        movie.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 220; // Ajuste de acordo com a largura do item
    items.forEach(item => {
        item.style.transform = `translateX(${offset}px)`;
    });
}