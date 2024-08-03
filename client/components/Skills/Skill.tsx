"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Skill as _ } from "../../interfaces/Skill";

import styles from "./Skill.module.scss";

interface SkillProps extends _ {
  delay: number;
}

export default function Skill({ name, icon }: SkillProps) {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40, rotate: -20 },
    reveal: { opacity: 1, translateY: 0, rotate: 0 },
  };

  return (
    <motion.div whileHover={{ translateY: -10, rotate: -10 }}>
      <motion.div className={styles.skill} variants={variants}>
        <Image src={icon} width={0} height={0} alt="" />
        <p>{name}</p>
      </motion.div>
    </motion.div>
  );
}
