function showDetails(movie) {
    const detailsText = {
        toyStory: "Toy Story é um filme de animação da Pixar que segue as aventuras de Woody, Buzz Lightyear e seus amigos.",
        frozen: "Frozen é uma animação da Disney sobre duas irmãs, Elsa e Anna, e suas jornadas de amor e autodescoberta.",
        insideOut: "Divertida Mente explora as emoções de uma menina chamada Riley, representadas como personagens que a ajudam a navegar pela vida."
    };

    document.getElementById('details-text').innerText = detailsText[movie];
    document.getElementById('movie-details').classList.remove('hidden');
}

function hideDetails() {
    document.getElementById('movie-details').classList.add('hidden');
}