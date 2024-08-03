import { useEffect, useRef } from "react";
import Image from "next/image";

import {
  useInView,
  useAnimation,
  motion,
  Variants,
  Transition,
} from "framer-motion";

import Icon from "@public/images/pricing/tick.svg";

import styles from "./Point.module.scss";

export default function Point({ point }: { point: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px 50px 0px",
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateX: -5 },
    reveal: { opacity: 1, translateX: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    duration: 1,
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.div
      className={styles.point}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <Image src={Icon} width={0} height={0} alt="" />
      <p>{point}</p>
    </motion.div>
  );
}
