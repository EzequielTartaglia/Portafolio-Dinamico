//Habilidades (chart)


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

//Botones para cambiar de grafico al clickear
const softSkillsButton = document.getElementById("softSkillsBtn");
const hardSkillsButton = document.getElementById("hardSkillsBtn");

const ctx = document.getElementById("myChart").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");

let chartValue = "";

hardSkillsButton.addEventListener("click", () => {
  hardSkillsBtn.classList.add("active");
  softSkillsBtn.classList.remove("active");
  myChart2.style.display = "none";
  myChart.style.display = "block";
  chartValue = "HardSkills";
  getChart(chartValue);
});


softSkillsButton.addEventListener("click", () => {
  softSkillsBtn.classList.add("active");
  hardSkillsBtn.classList.remove("active");
  myChart2.style.display = "block";
  myChart.style.display = "none";
  chartValue = "SoftSkills";
  getChart(chartValue);
});


function getChart(chartValue) {
  //hardSkillsButton
  if (chartValue === "HardSkills") {
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Habilidad 1",
          "Habilidad 2",
          "Habilidad 3",
          "Habilidad 4",
          "Habilidad 5",
          "Habilidad 6",
          "Habilidad 7",
          "Habilidad 8",
          "Habilidad 9",
          "Habilidad 10",
        ],
        datasets: [
          {
            label: "Nivel de habilidad",
            data: [90, 75, 80, 85, 70, 10, 58, 64, 97, 51, 84, 70],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
            ],
            fill: false,
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                fontColor: "#fff",
              },
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#fff",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        title: {
          display: true,
          text: "Niveles de habilidad",
          fontColor: "#000",
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
      },
    });
  }
  //softSkillsButton
  else if (chartValue === "SoftSkills") {
    const myChart2 = new Chart(ctx2, {
      type: "radar",
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "Personal Skills",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
          {
            label: "Team work skills",
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                fontColor: "#fff",
              },
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#fff",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        title: {
          display: true,
          text: "Niveles de habilidad",
          fontColor: "#000",
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
      },
    });
  }
}
// Mostrar el gráfico Soft Skills por defecto al cargar la página
hardSkillsButton.click();

