const cursor = document.querySelector(".custom_cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

let skills = ``;
var skills_list = {
  "C++": 40,
  CSS: 60,
  HTML5: 50,
  Javascript: 50,
  "C#": 30,
  Python3: 60,
  Unity: 40,
  LaTeX: 40,
  Flutter: 40,
  "React JS": 60,
};

for (var skill in skills_list) {
  skills += `<div class="d-inline-block card mt-4 dark-bg h-20 ml-4" style="width: 9rem;">
    <div class="card-body">
      <h5 class="card-title">${skill}</h5>
    </div>
    <div class="progress progress-custom" style="height: 5px;">
        <div class="progress-bar light-bg" role="progressbar" style="width: ${skills_list[skill]}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>`;
}

document.getElementById("skills").innerHTML += skills;
let state = 0;

function changeColor() {
  let root = document.documentElement;
  if (state == 0) {
    root.style.setProperty("--kprimary", "#ADEFD1FF");
    root.style.setProperty("--kprimary2", "#00203FFF");
    root.style.setProperty("--kprimary3", "rgba(255, 255, 255, 0.966)");
    root.style.setProperty("--kheadings", "#00203FFF");
    state++;
  } else if (state == 1) {
    root.style.setProperty("--kprimary", "#dedbf8");
    root.style.setProperty("--kprimary2", "#160033");
    root.style.setProperty("--kprimary3", "rgba(255, 255, 255, 0.966)");
    root.style.setProperty("--kheadings", "#160033");
    state++;
  } else if (state == 2) {
    root.style.setProperty("--kprimary", "#fffae7");
    root.style.setProperty("--kprimary2", "#cc5757");
    root.style.setProperty("--kprimary3", "rgba(255, 255, 255, 0.966)");
    root.style.setProperty("--kheadings", "#cc5757");
    state++;
  } else if (state == 3) {
    root.style.setProperty("--kprimary", "#D5F3FE");
    root.style.setProperty("--kprimary2", "#0a3b6e");
    root.style.setProperty("--kprimary3", "rgba(255, 255, 255, 0.966)");
    root.style.setProperty("--kheadings", "#0a3b6e");
    state++;
  } else {
    root.style.setProperty("--kprimary", "rgb(22, 22, 22)");
    root.style.setProperty("--kprimary2", "rgb(32, 32, 37)");
    root.style.setProperty("--kprimary3", "rgba(255, 255, 255, 0.966)");
    root.style.setProperty("--kheadings", "rgba(255, 255, 255, 0.966)");
    state -= 4;
  }
}
