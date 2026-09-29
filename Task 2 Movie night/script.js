const movies = [
    {
        title: "Avengers: Endgame",
        genre: "action",
        description: "The Avengers come together for one final battle to bring back those lost and defeat Thanos.",
        image: "anvergersendgame.jpg"
    },

    {
        title: "Hera Pheri",
        genre: "comedy",
        description: "Three friends get caught in a hilarious situation when they try to make quick money.",
        image: "herapheri.jpg"
    },

    {
        title: "Interstellar",
        genre: "sci-fi",
        description: "A group of astronauts travels through space in search of a new home for humanity.",
        image: "interstellar.jpg"
    },

    {
        title: "The Godfather",
        genre: "drama",
        description: "The aging head of a powerful crime family prepares to pass control of his empire to his son.",
        image: "thegodfather.jpg"
    },

    {
        title: "Jab We Met",
        genre: "rom-com",
        description: "A quiet businessman meets a cheerful girl on a train, leading to an unexpected journey and romance.",
        image: "jabwemet.jpg"
    },

    {
        title: "Dhurandhar",
        genre: "thriller",
        description: "An intense Indian thriller involving espionage, danger, and a high-stakes mission.",
        image: "dhurandhar.jpg"
    }
];

const movieContainer = document.getElementById("movieContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");


function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    if (movieList.length === 0) {
        movieContainer.innerHTML =
            '<p class="no-results">No movies found.</p>';

        return;
    }

    movieList.forEach(function(movie) {

        const movieCard = document.createElement("div");

        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} poster">

            <div class="movie-info">

                <h2>${movie.title}</h2>

                <p>${movie.description}</p>

                <span class="genre">${movie.genre}</span>

            </div>
        `;

        movieContainer.appendChild(movieCard);
    });
}


function filterMovies() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedGenre =
        genreFilter.value;

    const filteredMovies = movies.filter(function(movie) {

        const matchesSearch =
            movie.title.toLowerCase().includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    displayMovies(filteredMovies);
}


searchInput.addEventListener("input", filterMovies);

genreFilter.addEventListener("change", filterMovies);


displayMovies(movies);

const darkModeButton =
    document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        darkModeButton.textContent = "🌙 Dark Mode";
    } else {
        darkModeButton.textContent = "☀️ Light Mode";
    }

});
