const strips = document.querySelectorAll("#strip");

const strip = () => {
  const intersection = new IntersectionObserver(
    (entries) => controller(entries),
    { threshold: 1 }
  );

  strips.forEach((strip) => intersection.observe(strip));
};

const controller = (elements) => {
  elements.forEach((element) => {
    element.isIntersecting && effect(element);
  });
};

const effect = (element) => element.target.style.setProperty("--width", "100%");

export default strip;
