const sections = [
  {
    id: "#header",
    threshold: 0.5,
    delay: 100,
  },
  {
    id: "#about",
    threshold: 0.5,
    delay: 100,
  },
  {
    id: "#skills",
    threshold: 0.5,
    delay: 100,
  },
  {
    id: "#projects",
    threshold: 0.45,
    delay: 100,
  },
  {
    id: "#pricing",
    threshold: 0.5,
    delay: 150,
  },
  {
    id: "#contacts",
    threshold: 0.5,
    delay: 200,
  },
];

export default function Reveal() {
  Controller();
}

const Controller = () => {
  sections.forEach((section) =>
    observer(section.id, section.threshold, section.delay)
  );
};

const observer = (section, threshold, delay) => {
  const controller = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        Effect(entry.target.id, delay, observer);
      });
    },
    { threshold: threshold }
  );

  controller.observe(document.querySelector(section));
};

const Effect = (section, delay, observer) => {
  const children = document.querySelectorAll(
    `#${section} .scroll, #${section} .decoration`
  );

  let duration = 0;

  children.forEach((child) => {
    setTimeout(() => {
      child.classList.add("reveal");
      observer.unobserve(child);
    }, duration);

    duration += delay;
  });
};
