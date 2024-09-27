import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

import { Button } from "@interfaces/Link";

import styles from "./Social.module.scss";

export default function Social({ url, icon }: Button) {
  const scrollVariants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
    hover: { opacity: 1, translateY: -10 },
  };

  const hoverVariant: Variants = {
    hover: { opacity: 1, translateY: -10 },
  };

  const transitions: Transition = {
    type: "keyframes",
  };

  return (
    <motion.div variants={scrollVariants}>
      <motion.a
        className={styles.social}
        transition={transitions}
        variants={hoverVariant}
        whileHover="hover"
        href={url}
      >
        <Image src={icon!} width={0} height={0} alt={""} />
      </motion.a>
    </motion.div>
  );
}
