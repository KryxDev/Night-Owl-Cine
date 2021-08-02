const movieAPI = {
  key: "f6cbfb5deamsh5e851bb143ffaa5p16a926jsn2e8765767ba8",
  baseURL: "https://imdb8.p.rapidapi.com",
};
const searchInput = document.getElementById("search-box");

// =====> Add Keypress Event To  SearchInput <============ //

searchInput.addEventListener("keypress", (event) => {
  // if your press enter Then Only input Data is fetch

  if (event.keyCode == 13) {
    // ====> Call The Function to Get the Fetch Data <======= //
    getMovieDetail(searchInput.value);
  }
});

// Create a Function To get The fetch Data //

function getMovieDetail(movieName) {
  fetch(`${movieAPI.baseURL}/auto-complete?q=${movieName}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f6cbfb5deamsh5e851bb143ffaa5p16a926jsn2e8765767ba8",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  })
    .then((response) => {     
        return response.json();
    })
    .then(showMovieDetail)
    .catch((err) => {
      console.error(err);
    });
}

//
function showMovieDetail(result) {
  console.log(result);
  document.getElementById("home-page").remove();

  for (let i = result.d.length - 1; i > -1; i--) {
    // creating a new section with attribute class = "movie-info"
    let newSection = document.createElement("section");
    newSection.setAttribute("class", "movie-info");
    newSection.setAttribute("id", `movie-info${i}`);

    // Targeting searchBox and Inserting a New Section afterend of Search-section
    let target = document.getElementById("search-sec");
    target.insertAdjacentElement("afterend", newSection);

    if (result.d[i].hasOwnProperty("yr") == true) {
      let yearRangeDiv = document.createElement("div");
      yearRangeDiv.setAttribute("id", `yearRange${i}`);
      yearRangeDiv.setAttribute("class", "range-year");
      newSection.insertAdjacentElement("afterbegin", yearRangeDiv);

      let rangeYear = document.getElementById(`yearRange${i}`);
      rangeYear.innerText = `Year :- ${result.d[i].yr}`;

      document.getElementById(`yearRange${i}`).style.color = "#fff"
    }

    if (result.d[i].hasOwnProperty("y") == true) {
      let yearDiv = document.createElement("div");
      yearDiv.setAttribute("id", `movie-year${i}`);
      yearDiv.setAttribute("class", "movie-year");
      newSection.insertAdjacentElement("afterbegin", yearDiv);

      let releasedYear = document.getElementById(`movie-year${i}`);
      releasedYear.innerText = `Released Year :- ${result.d[i].y}`;

      document.getElementById(`movie-year${i}`).style.color = "#fff"
    }

    // creating if statement to check that object own crew key or not if true then only crewDiv get Created in DOM and Data get stored in that div.

    if (result.d[i].hasOwnProperty("s") == true) {
      // creating actorDiv with attribute class = "movie-actor" and id = "movie-actor[i]"

      let actorDiv = document.createElement("div");
      actorDiv.setAttribute("id", `movie-actor${i}`);
      actorDiv.setAttribute("class", "movie-actor");
      newSection.insertAdjacentElement("afterbegin", actorDiv);

      let movieActor = document.getElementById(`movie-actor${i}`);
      movieActor.innerText = `Cast :-${result.d[i].s}`;
    }

    // creating if statement to check that object own name key or not if true then only nameDiv get Created in DOM and Data get stored in that div.

    if (result.d[i].hasOwnProperty("l") == true) {
      let nameDiv = document.createElement("div");
      nameDiv.setAttribute("id", `movie-name${i}`);
      nameDiv.setAttribute("class", "movie-name");
      newSection.insertAdjacentElement("afterbegin", nameDiv);

      let movieName = document.getElementById(`movie-name${i}`);
      movieName.innerText = `Name :- ${result.d[i].l}`;
    }

    // creating if statement to check that object own image key or not if true then only imageDiv get Created in DOM and Image get stored in that div.

    if (result.d[i].hasOwnProperty("i") == true) {
      let imageDiv = document.createElement("div");
      imageDiv.setAttribute("id", `movie-image${i}`);
      imageDiv.setAttribute("class", "movie-image");
      newSection.insertAdjacentElement("afterbegin", imageDiv);

      let movieImage = document.getElementById(`movie-image${i}`);
      movieImage.style.backgroundImage = `url(${result.d[i].i.imageUrl})`;

      movieImage.style.backgroundSize = "contain";
      movieImage.style.backgroundRepeat = "no-repeat";
      movieImage.style.backgroundPosition = "center";
      movieImage.style.width = "250px";
      movieImage.style.height = "250px";
      movieImage.style.cursor = "pointer";

      imageDiv.addEventListener("click", () => {
        // alert("You clicked an Image.")
        document.location.assign(`${result.d[i].i.imageUrl}`);
      });

      movieImage.style.backgroundSize = "contain";
      movieImage.style.backgroundRepeat = "no-repeat";
      movieImage.style.backgroundPosition = "center";
      movieImage.style.width = "250px";
      movieImage.style.height = "250px";
    } else {
      document.getElementById(`movie-info${i}`).remove();
    }
  }

  // Creating a keydown event on input when user press backspace in searchInput and when its empty page get reload;
  searchInput.addEventListener("keydown", () => {
    if (searchInput.value == "") {
      document.location.reload();
    }
  });
}
