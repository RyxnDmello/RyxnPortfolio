"use client";

import { useEffect, useRef } from "react";

import {
  motion,
  useInView,
  useAnimation,
  Variants,
  Transition,
} from "framer-motion";

import { skills } from "../models/Skills";

import Title from "./Common/Title";
import Skill from "./Skills/Skill";

import styles from "./Skills.module.scss";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    staggerChildren: 0.05,
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <Title title="Skills" />

      <div className={styles.catalogue}>
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} delay={500 * i} />
        ))}
      </div>
    </motion.section>
  );
}
