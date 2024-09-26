// Exemplo básico para filtrar filmes
const movies = document.querySelectorAll('.movie');

document.querySelector('.search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    movies.forEach(movie => {
        const title = movie.querySelector('h3').innerText.toLowerCase();
        movie.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});
