import { useState } from "react";
import { motion, Variants } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import Reveal from "@public/images/cursor/reveal.svg";
import Hidden from "@public/images/cursor/hidden.svg";

import styles from "./Toggle.module.scss";

export default function Toggle() {
  const [icon, setIcon] = useState<StaticImageData>(Reveal);

  const onToggle = () => setIcon(() => (icon === Reveal ? Hidden : Reveal));

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      id="toggle"
      className={styles.toggle}
      variants={variants}
      onClick={onToggle}
    >
      <Image src={icon} width={0} height={0} alt={""} />
    </motion.div>
  );
}
