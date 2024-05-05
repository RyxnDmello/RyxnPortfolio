const strips = document.querySelectorAll(".strip");

export default function Strip() {
  Controller();
}

const Controller = () => {
  const controller = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        Effect(entry);
      });
    },
    {
      threshold: 0.5,
    }
  );

  strips.forEach((strip) => controller.observe(strip));
};

const Effect = (root) => {
  root.target.style.setProperty("--width", "100%");
};
