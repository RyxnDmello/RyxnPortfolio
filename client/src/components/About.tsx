import { skills } from "../models/About";

import Title from "./Common/Title";
import Skill from "./About/Skill";

export default function About() {
  const className = "about";

  return (
    <section id={className}>
      <div className={`${className}-details`}>
        <Title primary="About" secondary="Me" />

        <p className={`${className}-description scroll`}>
          A driven and enthusiastic developer specializing in web and mobile
          applications. I utilize cutting-edge industry technologies to
          seamlessly blend front-end and back-end components, crafting immersive
          and feature-rich experiences.
        </p>

        <a className={`${className}-button scroll`} href="#contacts">
          <p className="about-button-text">Contact Me</p>
        </a>
      </div>

      <div className={`${className}-skills`}>
        <Title primary="Skills" secondary="Overview" />

        <div className={`${className}-skills-panel`}>
          {skills.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
