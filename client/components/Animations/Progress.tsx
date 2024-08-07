"use client";

import { useScroll, useSpring, motion } from "framer-motion";

import styles from "./Progress.module.scss";

export default function Progress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    restDelta: 0.001,
    stiffness: 100,
    damping: 30,
  });

  return <motion.div className={styles.progress} style={{ scaleX }} />;
}
