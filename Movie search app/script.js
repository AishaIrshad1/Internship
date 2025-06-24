async function searchMovie() {
  const input = document.getElementById("movieInput").value.trim();
  const apiKey = "6ddd01da"; // Replace with your actual OMDb API key

  if (!input) return;

  const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(input)}&apikey=${apiKey}`);
  const data = await response.json();

  const resultsContainer = document.getElementById("movieResults");
  resultsContainer.innerHTML = "";

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x250?text=No+Image";

      const movieHTML = `
        <div class="movie-card">
          <img src="${poster}" alt="${movie.Title}">
          <h4>${movie.Title}</h4>
          <p>${movie.Year}</p>
        </div>
      `;
      resultsContainer.innerHTML += movieHTML;
    });
  } else {
    resultsContainer.innerHTML = `<p>No movies found for "<strong>${input}</strong>"</p>`;
  }
}
