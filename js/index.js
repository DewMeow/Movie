const API_KEY = "4521a67b-3a33-44bf-b107-6747f1e3e709";
const API_URL_PREMIERES =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY";

getMovies(API_URL_PREMIERES);

async function getMovies(URL) {
  try {
    const resp = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    const respData = await resp.json();
    showMovies(respData);
    console.log(respData);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function showMovies(data) {
  const moviesContainer = document.querySelector(".movies");
  data.items.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class="movie__cover-inner">
        <img
          class="movie__cover"
          src='${movie.posterUrlPreview}'
          alt="${movie.nameRu}"
        />
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => `${genre.genre}`
        )}</div>
      </div>
    `;
    moviesContainer.appendChild(movieEl);
  });
}
