const sections = [
  {
    id: "header",
    maximum: 0.5,
    minimum: 0.25,
    delay: 200,
  },
  {
    id: "about",
    maximum: 0.5,
    minimum: 0.25,
    delay: 150,
  },
  {
    id: "skills",
    maximum: 0.5,
    minimum: 0.25,
    delay: 150,
  },
  {
    id: "projects",
    maximum: 0.5,
    minimum: 0,
    delay: 150,
  },
  {
    id: "pricing",
    maximum: 0.5,
    minimum: 0.25,
    delay: 150,
  },
  {
    id: "contacts",
    maximum: 0.5,
    minimum: 0.25,
    delay: 200,
  },
  {
    id: "footer",
    maximum: 0.5,
    minimum: 0.5,
    delay: 150,
  },
];

const scroll = () => {
  sections.forEach((section) =>
    observer(section.id, section.maximum, section.minimum, section.delay)
  );
};

const observer = (section, maximum, minimum, delay) => {
  const intersection = new IntersectionObserver(
    (elements, observer) => controller(elements, observer, section, delay),
    { threshold: screen.width > 1500 ? maximum : minimum }
  );

  intersection.observe(document.querySelector(`#${section}`));
};

const controller = (elements, observer, section, delay) => {
  elements.forEach((element) => {
    element.isIntersecting && effect(section, delay, observer);
  });
};

const effect = (section, delay, observer) => {
  const children = document.querySelectorAll(`#${section} .scroll`);
  let duration = 0;

  children.forEach((child) => {
    setTimeout(() => {
      child.classList.add("reveal");
      observer.unobserve(child);
    }, duration);

    duration += delay;
  });
};

export default scroll;
