const mouseCursor = document.getElementById("cursor");

const cursor = () => {
  window.addEventListener("mousedown", () => {
    mouseCursor.style.scale = 0.8;
  });

  window.addEventListener("mouseup", () => {
    mouseCursor.style.scale = 1;
  });

  window.addEventListener("mousemove", (event) => {
    mouseCursor.style.translate = `${event.pageX}px ${event.pageY}px`;
  });
};

export default cursor;
