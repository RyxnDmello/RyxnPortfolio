import { motion, Variants } from "framer-motion";

import { Link as _ } from "@interfaces/Link";

import styles from "./Link.module.scss";

export default function Link({ url, text, solid }: _) {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.a
      className={solid ? styles.solid : styles.link}
      variants={variants}
      href={url}
    >
      <p>{text}</p>
    </motion.a>
  );
}
