const listPlanets = document.getElementById("listPlanets");
fetch(`https://swapi.dev/api/planets/`)
  .then((response) => response.json())
  .then((data) =>
    data.results.map(
      (planet) => (listPlanets.innerHTML += `${planet.name}</br>`)
    )
  );
