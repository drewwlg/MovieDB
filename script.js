const container = document.querySelector("#container");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU4ZDI2MTdkYzE0YmZmODUxMmFhNzkyOTE3MTEwMiIsIm5iZiI6MTcyNzY5NjYwMS4wNzY4NDQsInN1YiI6IjY2ZjJmYWQ5MDIyMDhjNjdjODhkYTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7-hO-eQOrIwZiyJPgXNbSczcSVeTFu3vOR2qh8G1dg",
  },
};

async function fetchData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=fr-BE&page=1",
    options
  );
  const data = await response.json();

  return data;
}

async function displayData() {
  const films = await fetchData();
  films.results.forEach((film) => {
    const filmCard = `<div class="card">
          <img
            src="https://image.tmdb.org/t/p/w500${film.poster_path}"
            alt="${film.title}"
          />
          <div class="container">
            <h4><b><span class="title">Titre :</span> ${film.title}</b></h4>
            <p><span class="title">Résumé :</span> ${film.overview}</p>
            <p><span class="title">Date de sortie :</span> ${film.release_date}</p>
            <p><span class="title">Note :</span> ${film.vote_average}</p>
          </div>
        </div>
    `;
    container.innerHTML += filmCard;
    console.log(`${film.id} : ${film.original_title}`);
  });
}

displayData();
