const module = (() => {
    const MainNaves = document.querySelector(".main-naves")
  
    const fetching = () => {
      fetch("https://swapi.dev/api/starships/").then((res) =>
        res.json().then((json) => {
          const movie = json.results.map((item) => {
            // createElement's
            const imgWrapper = document.createElement("div");
            const nombreNave = document.createElement("p");
            const imgNave = document.createElement("img");
            imgNave.src = `src/assets/img/naves/${item.name}.jpg`;
  
            // ClassList
            imgWrapper.classList.add("nave");
            imgNave.classList.add("poster");
  
            // append's
  
            nombreNave.append(item.name);
            imgWrapper.append(nombreNave, imgNave);
            MainNaves.append(imgWrapper);
  
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
  