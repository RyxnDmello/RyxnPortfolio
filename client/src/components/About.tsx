import { stats } from "../models/About";

import Title from "./Common/Title";
import Statistic from "./About/Statistic";

export default function About() {
  const className = "about";

  return (
    <section id={className}>
      <div className={`${className}-details`}>
        <Title primary="About" secondary="Me" />

        <p className={`${className}-description scroll`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          totam commodi molestias odio facere rerum adipisci esse rem recusandae
          praesentium.
        </p>

        <a className={`${className}-button scroll`} href="#contacts">
          <p className="about-button-text">Contact Me</p>
        </a>
      </div>

      <div className={`${className}-statistics`}>
        <Title primary="Skills" secondary="Overview" />

        <div className={`${className}-statistics-panel`}>
          {stats.map((stat, i) => (
            <Statistic key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
