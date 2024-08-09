"use client";

import { useRef, useEffect } from "react";

import {
  useAnimation,
  useInView,
  Variants,
  Transition,
  motion,
} from "framer-motion";

import Triple from "./Triple";

import styles from "./Pattern.module.scss";

interface RibbonProps {
  triples: string[];
  direction: 1 | -1;
}

export default function Pattern({ triples, direction }: RibbonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controller = useAnimation();

  const visible = useInView(ref, {
    amount: "all",
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
  };

  useEffect(() => {
    if (visible) controller.start("reveal");
  }, [visible]);

  return (
    <motion.div
      className={`${styles.pattern} ${
        direction === 1 ? styles.left : styles.right
      }`}
      transition={transitions}
      animate={controller}
      variants={variants}
      initial="hidden"
      ref={ref}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <Triple key={i} triples={triples} direction={direction} />
      ))}
    </motion.div>
  );
}
