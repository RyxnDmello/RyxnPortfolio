"use client";

import { cards } from "../models/Pricing";

import {
  motion,
  Variants,
  Transition,
  useInView,
  useAnimation,
} from "framer-motion";

import Title from "./Common/Title";
import Card from "./Pricing/Card";

import styles from "./Pricing.module.scss";
import { useEffect, useRef } from "react";

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px -500px 0px",
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -20 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    staggerChildren: 0.5,
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.section
      id="pricing"
      className={styles.pricing}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <Title title="Pricing" />

      <div className={styles.cards}>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </motion.section>
  );
}
