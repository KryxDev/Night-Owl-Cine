const movieAPI = {
  key: "d285d24e",
  baseURL: " https://www.omdbapi.com",
};
const searchInput = document.getElementById("search-box");

// =====> Add Keypress Event To  SearchInput <============ //

searchInput.addEventListener("keydown", (event) => {
  // if your press enter Then Only input Data is fetch

  if (event.keyCode == 13) {
    // ====> Call The Function to Get the Fetch Data <======= //
    getMovieDetail(searchInput.value);
  }
  if(event.keyCode == 8 && searchInput.value == ""){
    document.location.reload();
  }
});

// Create a Function To get The fetch Data //

function getMovieDetail(movieName) {
  fetch(`${movieAPI.baseURL}/?t=${movieName}&apikey=${movieAPI.key}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then(showMovieInfo)
    .catch((err) => {
      console.error(err);
    });
}

//
function showMovieInfo(result) {
  console.log(result); 

  // ====> Movie-Information <==== //
  let movieImg = document.querySelector(".movie-img");
  let movieInfo = document.querySelector(".movie-info");

  // ==> Rating <== //
  // if (result.hasOwnProperty("Rating")) {
  //   for (result.Rating[i]; i < result.Rating.length; i++) {
  //     let rating = document.createElement("p");
  //   }
  // }

  // ==> ImdbVotes <== //
  if (result.hasOwnProperty("imdbVotes") == true) {
    let imdbVotes = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", imdbVotes);
    imdbVotes.innerText = ` Imdb Votes : ${result.imdbVotes}`;
  }
  // ==> ImbdRating <== //
  if (result.hasOwnProperty("imdbRating") == true) {
    let imdbRating = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", imdbRating);
    imdbRating.innerText = ` Imdb Rating : ${result.imdbRating}`;
  }
  // ==> Writer <== //
  if (result.hasOwnProperty("Writer") == true) {
    let writer = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", writer);
    writer.innerText = ` Writer : ${result.Writer}`;
  }
  // ==> Type <== //
  if (result.hasOwnProperty("Type") == true) {
    let type = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", type);
    type.innerText = ` Type : ${result.Type}`;
  }
  // ==> MetaScore <== //
  if (result.hasOwnProperty("Metascore") == true) {
    let metaScore = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", metaScore);
    metaScore.innerText = ` MetaScore : ${result.Metascore}`;
  }
  // ==> Language <== //
  if (result.hasOwnProperty("Langauge") == true) {
    let language = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", language);
    language.innerText = ` Language : ${result.Language}`;
  }
  // ==> Genre <== //
  if (result.hasOwnProperty("Genre") == true) {
    let genre = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", genre);
    genre.innerText = `Genre : ${result.Genre}`;
  }
  // ==> Director <== //
  if (result.hasOwnProperty("Director") == true) {
    let director = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", director);
    director.innerText = ` Director : ${result.Director}`;
  }
  // ==> Country <== //
  if (result.hasOwnProperty("Country") == true) {
    let country = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", country);
    country.innerText = ` Country : ${result.Country}`;
  }
  // ==> BoxOffice <== //
  if (result.hasOwnProperty("Boxoffice") == true) {
    let boxOffice = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", boxOffice);
    boxOffice.innerText = ` BoxOffice : ${result.Boxoffice}`;
  }
  // ==> Awards <== //
  if (result.hasOwnProperty("Awards") == true) {
    let awards = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", awards);
    awards.innerText = ` Awards : ${result.Awards}`;
  }
  // ==> Actors <== //
  if (result.hasOwnProperty("Actors") == true) {
    let actors = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", actors);
    actors.innerText = ` Actors : ${result.Actors}`;
  }
  // ==> Runtime <== //
  if (result.hasOwnProperty("Runtime") == true) {
    let runtime = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", runtime);
    runtime.innerText = ` Runtime : ${result.Runtime}`;
  }
  // ==> Rated <== //
  if (result.hasOwnProperty("Rated") == true) {
    let rated = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", rated);
    rated.innerText = ` Rated : ${result.Rated}`;
  }
  // ==> Released <== //
  if (result.hasOwnProperty("Released") == true) {
    let released = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", released);
    released.innerText = ` Released : ${result.Released}`;
  }
  // ==> TotalSeasons <== //
  if (result.hasOwnProperty("totalSeasons") == true) {
    let totalSeasons = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", totalSeasons);
    totalSeasons.innerText = ` Total Seasons : ${result.totalSeasons}`;
  }
  // ==> Year <== //
  if (result.hasOwnProperty("Year") == true) {
    let year = document.createElement("p");
    movieInfo.insertAdjacentElement("afterbegin", year);
    year.innerText = ` Year : ${result.Year}`;
  }
  // ==> Title <== //
  if (result.hasOwnProperty("Title") == true) {
    let title = document.createElement("h1");
    movieInfo.insertAdjacentElement("afterbegin", title);
    title.innerText = `Title : ${result.Title}`;
  }
  // ==> Poster <== //
  if (result.hasOwnProperty("Poster") == true) {
    let image = document.createElement("img");
    movieImg.insertAdjacentElement("afterbegin", image);
    image.setAttribute("src", `${result.Poster}`);
    image.setAttribute("alt", "Movie-Poster");
  }
  
}
