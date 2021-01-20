const selectEpisode = document.getElementById(`select-episode`);
const showInfo = document.getElementById(`show-info`);
const charactersContainer = document.querySelector(".characters-container");
const getPlanets = document.getElementById("getPlanets");
const episode = selectEpisode.value;

const getCharacters = (episode) => {
  axios
    .get(`http://swapi.dev/api/films/${selectEpisode.value}/`)
    .then((res) => {
      const characters = res.data.characters;
      characters.map((url) => {
        axios.get(url).then((results) => {
          const character = results.data;
          charactersContainer.innerHTML += `Ім'я:${character?.name}, Дата народження: ${character?.birth_year}, Стать: ${character?.gender}</br>`;
        });
      });
    });
};
selectEpisode.addEventListener("click", () => {
  charactersContainer.innerHTML = "";
});

showInfo.addEventListener("click", () => {
  charactersContainer.innerHTML = "";
  getCharacters(episode);
});

getPlanets.addEventListener(
  "click",
  () => (window.location.href = "planets.html")
);
