const module = (() => {
    const mainPlanetas = document.querySelector(".main-planetas")
  
    const fetching = () => {
      fetch("https://swapi.dev/api/planets/").then((res) =>
        res.json().then((json) => {
          const movie = json.results.map((item) => {
            // createElement's
            const imgWrapper = document.createElement("div");
            const nombrePlaneta = document.createElement("p");
            const imgPlaneta = document.createElement("img");
            imgPlaneta.src = `src/assets/img/planetas/${item.name}.jfif`;
  
            // ClassList
            imgWrapper.classList.add("planetas");
            imgPlaneta.classList.add("poster");
  
            // append's
  
            nombrePlaneta.append(item.name);
            imgWrapper.append(nombrePlaneta, imgPlaneta);
            mainPlanetas.append(imgWrapper);
  
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
  