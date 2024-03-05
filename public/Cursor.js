const mouseCursor = document.getElementById("cursor");

const clickables = ["projects-project", "skills-domain"];

const mouseHover = (event, options, animationClass) => {
  for (const i in event.target.classList) {
    if (event.target.classList.length === 0) break;

    for (const j in options) {
      if (!event.target.classList[i].includes(options[j])) continue;
      mouseCursor.classList.add(animationClass);
      return;
    }
  }

  console.log(false);
  mouseCursor.classList.remove(animationClass);
};

window.addEventListener("mousedown", () => {
  mouseCursor.style.scale = 0.8;
});

window.addEventListener("mouseup", () => {
  mouseCursor.style.scale = 1;
});

window.addEventListener("mousemove", (event) => {
  mouseCursor.style.translate = `${event.pageX}px ${event.pageY}px`;

  mouseHover(event, clickables, "clickable");
});
