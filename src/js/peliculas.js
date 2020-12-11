const module = (() => {
  const mainPeliculas = document.querySelector(".main-paliculas");

  const fetching = () => {
    fetch("https://swapi.dev/api/films/").then((res) =>
      res.json().then((json) => {
        const movie = json.results.map((item) => {
          // createElement's
          const imgWrapper = document.createElement("div");
          const tituloPelicula = document.createElement("p");
          const parrafoDescripcion = document.createElement("p");
          const imgPelicula = document.createElement("img");
          imgPelicula.src = `src/assets/img/movies/${item.title}.jpg`;

          // ClassList
          imgWrapper.classList.add("pelicula");
          imgPelicula.classList.add("poster");
          parrafoDescripcion.classList.add("description");
          // append's
          parrafoDescripcion.append(item.opening_crawl);
          tituloPelicula.append(item.title);
          imgWrapper.append(tituloPelicula, imgPelicula, parrafoDescripcion);
          mainPeliculas.append(imgWrapper);

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
