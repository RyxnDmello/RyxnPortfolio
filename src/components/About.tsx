import Circles from "./decorations/Circles";

import Statistic from "./About/Statistic";

export default function About() {
  return (
    <section id="about">
      <div className="about-details">
        <h3 className="about-title scroll">
          <span>About</span> Me
        </h3>

        <p className="about-description scroll">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          totam commodi molestias odio facere rerum adipisci esse rem recusandae
          praesentium.
        </p>

        <a className="about-button scroll" href="#services">
          <p className="about-button-text">Contact Me</p>
        </a>
      </div>

      <div className="about-statistics">
        <h3 className="about-title scroll">
          <span>Skills</span> Overview
        </h3>

        <div className="about-statistics-panel">
          <Statistic title="Web Development" rating={4} />
          <Statistic title="Mobile Development" rating={3} />
          <Statistic title="Game Development" rating={2} />
          <Statistic title="App Design" rating={4} />
        </div>
      </div>

      <Circles count={4} />
      <Circles count={4} />
    </section>
  );
}
