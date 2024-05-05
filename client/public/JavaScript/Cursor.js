const mouseCursor = document.getElementById("cursor");

const hoverables = ["projects-project", "skills-domain"];

export default function Cursor() {
  window.addEventListener("mousedown", () => {
    mouseCursor.style.scale = 0.8;
  });

  window.addEventListener("mouseup", () => {
    mouseCursor.style.scale = 1;
  });

  window.addEventListener("mousemove", (event) => {
    mouseCursor.style.translate = `${event.pageX}px ${event.pageY}px`;

    mouseHover(event, hoverables, "hoverable");
  });
}

const mouseHover = (event, options, animationClass) => {
  for (const i in event.target.classList) {
    if (event.target.classList.length === 0) break;

    for (const j in options) {
      if (!event.target.classList[i].includes(options[j])) continue;
      mouseCursor.classList.add(animationClass);
      return;
    }
  }

  mouseCursor.classList.remove(animationClass);
};
