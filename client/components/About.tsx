import { skills } from "../models/About";

import Title from "./Common/Title";
import Skill from "./About/Skill";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.details}>
        <Title primary="About" secondary="Me" />

        <p className={`${styles.description} scroll`}>
          A driven and enthusiastic developer specializing in web and mobile
          applications. I utilize cutting-edge industry technologies to
          seamlessly blend front-end and back-end components, crafting immersive
          and feature-rich experiences.
        </p>

        <a className={`${styles.link} scroll`} href="#contacts">
          <p>Contact Me</p>
        </a>
      </div>

      <div className={styles.overview}>
        <Title primary="Skills" secondary="Overview" />

        <div className={styles.skills}>
          {skills.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
