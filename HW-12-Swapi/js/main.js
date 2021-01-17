const selectEpisode = document.getElementById(`select-episode`);
const showInfo = document.getElementById(`show-info`);
const charactersContainer = document.querySelector(".characters-container");
const getPlanets = document.getElementById("getPlanets");

const getCharacters = (episode) => {
  axios
    .get("https://swapi.dev/api/people/")
    .then((res) =>
      res.data.results
        .filter((character) =>
          character.films.includes(`http://swapi.dev/api/films/${episode}/`)
        )
        .map(
          (character) =>
            (charactersContainer.innerHTML += `Ім'я:${character?.name}, Дата народження: ${character?.birth_year}, Стать: ${character?.gender}</br>`)
        )
    );
};

showInfo.addEventListener("click", () => {
  const episode = selectEpisode.value;

  getCharacters(episode);
});

getPlanets.addEventListener(
  "click",
  () => (window.location.href = "planets.html")
);
