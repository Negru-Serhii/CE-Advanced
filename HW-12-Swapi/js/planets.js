const listPlanets = document.getElementById("listPlanets");
axios
  .get(`https://swapi.dev/api/planets/`)
  .then((res) =>
    res.data.results.map(
      (planet) =>
        (listPlanets.innerHTML += `Planet: ${planet.name}; Diameter: ${planet.diameter}; Gravity: ${planet.gravity};</br> Population: ${planet.population}.</br>`)
    )
  );
