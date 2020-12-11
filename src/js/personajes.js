const module = (() => {
  const mainPersonajes = document.querySelector(".main-personaje")

  const fetching = () => {
    fetch("https://swapi.dev/api/people/").then((res) =>
      res.json().then((json) => {
        const movie = json.results.map((item) => {
          // createElement's
          const imgWrapper = document.createElement("div");
          const nombrePersonaje = document.createElement("p");
          const imgPersonaje = document.createElement("img");
          imgPersonaje.src = `src/assets/img/personajes/${item.name}.jpg`;

          // ClassList
          imgWrapper.classList.add("personaje");
          imgPersonaje.classList.add("poster");

          // append's

          nombrePersonaje.append(item.name);
          imgWrapper.append(nombrePersonaje, imgPersonaje);
          mainPersonajes.append(imgWrapper);

          return console.log(item);
        });
        return movie;
      })
    );
  };

  return {
    consulta: fetching,
  };
})();
