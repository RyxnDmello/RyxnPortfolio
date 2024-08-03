"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion, Variants } from "framer-motion";

import { Card as _ } from "../../interfaces/Pricing";

import Point from "./Point";

import styles from "./Card.module.scss";

export default function Card({ plan, price, about, points }: _) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    amount: "all",
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -20 },
    reveal: { opacity: 1, translateY: 0 },
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.div ref={ref} className={styles.card} variants={variants}>
      <h2>{plan} Plan</h2>

      <div className={styles.details}>
        <h4>
          <span>₹</span> {price} <span>/month</span>
        </h4>

        <p>{about}</p>
      </div>

      <div className={styles.points}>
        {points.map((point, i) => (
          <Point key={i} point={point} />
        ))}
      </div>

      <a className={styles.button} href="#contacts">
        <p>Discuss Your Idea</p>
      </a>
    </motion.div>
  );
}
