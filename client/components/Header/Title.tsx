import { motion, Variants } from "framer-motion";

import styles from "./Title.module.scss";

export default function Title() {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  return (
    <div className={styles.title}>
      <motion.p variants={variants}>Hey, I Am</motion.p>
      <motion.p variants={variants}>Ryan Nolasco D Mello</motion.p>
      <motion.p variants={variants}>Passionate Web & Mobile Developer</motion.p>
    </div>
  );
}
