import Image from "next/image";

import { motion, Variants, Transition } from "framer-motion";

import Icon from "@public/buttons/right.svg";

import styles from "./Option.module.scss";

interface OptionProps {
  name: string;
  active: boolean;
  onSelect: () => void;
}

export default function Option({ name, active, onSelect }: OptionProps) {
  const variants: Variants = {
    hidden: { opacity: 0, translateX: -60 },
    reveal: { opacity: 1, translateX: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    duration: 1,
  };

  return (
    <motion.div transition={transitions} variants={variants}>
      <div
        className={`${styles.option} ${active && styles.active}`}
        onClick={onSelect}
      >
        <p>{name}</p>

        <div>
          <Image src={Icon} width={0} height={0} alt="" />
        </div>
      </div>
    </motion.div>
  );
}
