// Exemplo básico para filtrar filmes
const movies = document.querySelectorAll('.movie');

document.querySelector('.search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    movies.forEach(movie => {
        const title = movie.querySelector('h3').innerText.toLowerCase();
        movie.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});
// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}