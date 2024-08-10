"use client";

import { useEffect, useRef } from "react";
import { motion, Variants, Transition } from "framer-motion";

import styles from "./Skill.module.scss";

interface SkillProps {
  title: string;
  percentage: number;
}

export default function Skill({ title, percentage }: SkillProps) {
  const percentageRef = useRef<HTMLDivElement>(null);

  const variants: Variants = {
    hidden: { opacity: 0, translateX: -80 },
    reveal: { opacity: 1, translateX: 0 },
  };

  const transitions: Transition = {
    type: "keyframes",
  };

  useEffect(() => {
    percentageRef.current!.style.setProperty("--percentage", `${percentage}%`);
  }, []);

  return (
    <motion.div
      transition={transitions}
      className={styles.skill}
      variants={variants}
    >
      <p>{title}</p>
      <div ref={percentageRef}></div>
    </motion.div>
  );
}
