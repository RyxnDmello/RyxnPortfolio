import { stats } from "../models/About";

import Title from "./Common/Title";
import Statistic from "./About/Statistic";

export default function About() {
  return (
    <section id="about">
      <div className="about-details">
        <Title primary="About" secondary="Me" />

        <p className="about-description scroll">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          totam commodi molestias odio facere rerum adipisci esse rem recusandae
          praesentium.
        </p>

        <a className="about-button scroll" href="#contacts">
          <p className="about-button-text">Contact Me</p>
        </a>
      </div>

      <div className="about-statistics">
        <Title primary="Skills" secondary="Overview" />

        <div className="about-statistics-panel">
          {stats.map((stat, i) => (
            <Statistic key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
