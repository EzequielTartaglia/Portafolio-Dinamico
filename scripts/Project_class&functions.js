//Crear clase proyecto
class Proyecto {
    constructor(
      id,
      logo,
      title,
      description,
      requeriments,
      languages,
      libraries,
      img,
      link
    ) {
      this.id = id;
      this.logo = logo;
      this.title = title;
      this.description = description;
      this.requeriments = requeriments;
      this.languages = languages;
      this.libraries = libraries;
      this.img = img;
      this.link = link;
    }
  
    render() {
      // Crea un elemento li para cada requerimiento
      const requerimentsList = this.requeriments
        .map((requeriment) => {
          return `<li>${requeriment}</li>`;
        })
        .join("");
  
      // Crea la plantilla HTML y reemplaza los marcadores de posición con los datos del proyecto
      const template = `
        <div id="${this.id}r" class="project-card">
        <div class="project-header">
          <div class="logo-container">
            <img src="${this.logo}" alt="Logo de la empresa">
          </div>
          <div class="project-title">
            <h2>${this.title}</h2>
          </div>
        </div>
        <div class="project-features">
          <div class="left-column">
            <div class="project-description">
              <p>${this.description}</p>
            </div>
            <div class="project-requirements">
              <h3>Requerimientos</h3>
              <ul class="requirementsList">
              ${requerimentsList}
              </ul>
            </div>
            <div class="project-languages">
              <h3>Lenguajes utilizados</h3>
              <p>${this.languages}</p>
              <h3>Librerías o hooks adicionales</h3>
              <p>${this.libraries}</p>
            </div>
          </div>
          <div class="right-column">
            <div class="button-container">
              <img src="${this.img}" alt="${this.title}">
              <div class="project-button">
                <a class="btn" href="${this.link}">Ver Demo</a>
              </div>
            </div>
          </div>
        </div>
        `;
  
      return template;
    }
  }
  
  
  function fadeIn(element) {
      let opacity = 0;
      element.style.opacity = 0;
      let timer = setInterval(function () {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    }
    
    function fadeOut(element) {
      let opacity = 1;
      element.style.opacity = 1;
      let timer = setInterval(function () {
        if (opacity <= 0) {
          clearInterval(timer);
          element.style.display = "none";
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
      }, 50);
    }
  
  function renderDefaultProject1(){
      const projectContainer = document.querySelector(".containerProjects");
      projectContainer.innerHTML = proyectos[0].render();
      project1Btn.classList.add("active");
      project2Btn.classList.remove("active");
      project3Btn.classList.remove("active");
      project4Btn.classList.remove("active");
      document.getElementById("project1").style.display = "block";
  }
  
  function renderProject1() {
    const projectContainer = document.querySelector(".containerProjects");
    setTimeout(function () {
      fadeIn(projectContainer);
      projectContainer.innerHTML = proyectos[0].render();
      project1Btn.classList.add("active");
      project2Btn.classList.remove("active");
      project3Btn.classList.remove("active");
      project4Btn.classList.remove("active");
      fadeOut(document.getElementById("project2"));
      fadeOut(document.getElementById("project3"));
      fadeOut(document.getElementById("project4"));
      document.getElementById("project1").style.display = "block";
    }, 200);
  }
  
  function renderProject2() {
    const projectContainer = document.querySelector(".containerProjects");
    setTimeout(function () {
      fadeIn(projectContainer);
      projectContainer.innerHTML = proyectos[1].render();
      project2Btn.classList.add("active");
      project1Btn.classList.remove("active");
      project3Btn.classList.remove("active");
      project4Btn.classList.remove("active");
      fadeOut(document.getElementById("project1"));
      fadeOut(document.getElementById("project3"));
      fadeOut(document.getElementById("project4"));
      document.getElementById("project2").style.display = "block";
    }, 200);
  }
  function renderProject3() {
    const projectContainer = document.querySelector(".containerProjects");
    setTimeout(function () {
      fadeIn(projectContainer);
      projectContainer.innerHTML = proyectos[2].render();
      project3Btn.classList.add("active");
      project1Btn.classList.remove("active");
      project2Btn.classList.remove("active");
      project4Btn.classList.remove("active");
      fadeOut(document.getElementById("project1"));
      fadeOut(document.getElementById("project2"));
      fadeOut(document.getElementById("project4"));
      document.getElementById("project3").style.display = "block";
    }, 200);
  }
  function renderProject4() {
    const projectContainer = document.querySelector(".containerProjects");
    setTimeout(function () {
      fadeIn(projectContainer);
      projectContainer.innerHTML = proyectos[3].render();
      project4Btn.classList.add("active");
      project1Btn.classList.remove("active");
      project2Btn.classList.remove("active");
      project3Btn.classList.remove("active");
      fadeOut(document.getElementById("project1"));
      fadeOut(document.getElementById("project2"));
      fadeOut(document.getElementById("project3"));
      document.getElementById("project4").style.display = "block";
    }, 200);
  }
  //Crear objetos card (proyectos)
  const projectCard1 = new Proyecto(
      /* Id */ "project1",
      /* Logo */ "https://dummyimage.com/50x50/ccc/000.png&text=Logo",
      /* Título */ "Proyecto n°1",
      /* Descripción */ "Descripción del nuevo proyecto",
      /* Requerimientos */ ["Requerimiento 1", "Requerimiento 2"],
      /* Lenguajes */ "Lenguaje 1, Lenguaje 2",
      /* Librerías */ "Librería 1, Librería 2",
      /* Imagen */ "https://dummyimage.com/500x500/ccc/000.png&text=project-image",
      /* Link */ "http://google.com"
    );
    const projectCard2 = new Proyecto(
      /* Id */ "project2",
      /* Logo */ "https://dummyimage.com/50x50/ccc/000.png&text=Logo",
      /* Título */ "Proyecto n°2",
      /* Descripción */ "Descripción del nuevo proyecto",
      /* Requerimientos */ ["Requerimiento 1", "Requerimiento 2"],
      /* Lenguajes */ "Lenguaje 1, Lenguaje 2",
      /* Librerías */ "Librería 1, Librería 2",
      /* Imagen */ "https://dummyimage.com/500x500/ccc/000.png&text=project-image",
      /* Link */ "http://google.com"
    );
    const projectCard3 = new Proyecto(
      /* Id */ "project3",
      /* Logo */ "https://dummyimage.com/50x50/ccc/000.png&text=Logo",
      /* Título */ "Proyecto n°3",
      /* Descripción */ "Descripción del nuevo proyecto",
      /* Requerimientos */ ["Requerimiento 1", "Requerimiento 2"],
      /* Lenguajes */ "Lenguaje 1, Lenguaje 2",
      /* Librerías */ "Librería 1, Librería 2",
      /* Imagen */ "https://dummyimage.com/500x500/ccc/000.png&text=project-image",
      /* Link */ "http://google.com"
    );
    const projectCard4 = new Proyecto(
      /* Id */ "project4",
      /* Logo */ "https://dummyimage.com/50x50/ccc/000.png&text=Logo",
      /* Título */ "Proyecto n°4",
      /* Descripción */ "Descripción del nuevo proyecto",
      /* Requerimientos */ ["Requerimiento 1", "Requerimiento 2"],
      /* Lenguajes */ "Lenguaje 1, Lenguaje 2",
      /* Librerías */ "Librería 1, Librería 2",
      /* Imagen */ "https://dummyimage.com/500x500/ccc/000.png&text=project-image",
      /* Link */ "http://google.com"
    );
    
  //Array donde se guardaran los objetos Proyecto
  let proyectos = [];
  //Agregar objetos al array
  proyectos.push(projectCard1);
  proyectos.push(projectCard2);  
  proyectos.push(projectCard3);
  proyectos.push(projectCard4);
  
  //Proyectos (dinamic cards)
  const projectContainer = document.querySelector(".containerProjects");
  
  //Botones para cambiar de grafico al clickear
  const project1Btn = document.getElementById("primerProyectoBtn");
  const project2Btn = document.getElementById("segundoProyectoBtn");
  const project3Btn = document.getElementById("tercerProyectoBtn");
  const project4Btn = document.getElementById("cuartoProyectoBtn");
  
  //Evento de click
  project1Btn.addEventListener("click", renderProject1);
  project2Btn.addEventListener("click", renderProject2);
  project3Btn.addEventListener("click", renderProject3);
  project4Btn.addEventListener("click", renderProject4);
  
  //Card renderizada por default
  project1Btn.click()