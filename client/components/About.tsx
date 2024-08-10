"use client";

import { useEffect, useRef } from "react";

import {
  useInView,
  useAnimation,
  motion,
  Variants,
  Transition,
} from "framer-motion";

import { skills } from "@models/About";

import Title from "./Common/Title";
import Skill from "./About/Skill";

import styles from "./About.module.scss";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const controller = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px -300px 0px",
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    delayChildren: 0.25,
    staggerChildren: 0.15,
  };

  useEffect(() => {
    if (visible) controller.start("reveal");
  }, [visible]);

  return (
    <motion.section
      id="about"
      className={styles.about}
      transition={transitions}
      animate={controller}
      variants={variants}
      initial="hidden"
      ref={ref}
    >
      <Title title="About" />

      <motion.p className={styles.overview} variants={variants}>
        A driven and enthusiastic developer specializing in web and mobile
        applications. I utilize cutting-edge technologies to seamlessly
        integrate frontend and backend systems, creating immersive and
        feature-rich experiences.
      </motion.p>

      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </motion.section>
  );
}
