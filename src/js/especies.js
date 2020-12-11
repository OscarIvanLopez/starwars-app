const module = (() => {
    const mainEspecies = document.querySelector(".main-especies")
  
    const fetching = () => {
      fetch("https://swapi.dev/api/species/").then((res) =>
        res.json().then((json) => {
          const movie = json.results.map((item) => {
            // createElement's
            const imgWrapper = document.createElement("div");
            const nombreEspecie = document.createElement("p");
            const imgEspecie = document.createElement("img");
            imgEspecie.src = `src/assets/img/especies/${item.name}.jpg`;
  
            // ClassList
            imgWrapper.classList.add("especie");
            imgEspecie.classList.add("poster");
  
            // append's
  
            nombreEspecie.append(item.name);
            imgWrapper.append(nombreEspecie, imgEspecie);
            mainEspecies.append(imgWrapper);
  
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
  