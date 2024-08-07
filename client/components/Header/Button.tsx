import { motion, Variants } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import styles from "./Button.module.scss";

interface ButtonProps {
  url: string;
  text: string;
  solid: boolean;
  icon?: StaticImageData;
}

export default function Button({ url, text, icon, solid }: ButtonProps) {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };
  return (
    <motion.a
      className={`${solid ? styles.solid : styles.button} scroll`}
      variants={variants}
      href={url}
    >
      <p>{text}</p>
      {icon && <Image src={icon} width={0} height={0} alt="" />}
    </motion.a>
  );
}
