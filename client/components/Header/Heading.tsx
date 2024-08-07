import { motion, Variants } from "framer-motion";
import styles from "./Heading.module.scss";

export default function Heading({ title }: { title: string }) {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.h1 className={styles.heading} variants={variants}>
      {title}
    </motion.h1>
  );
}
