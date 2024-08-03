"use client";

import { ReactNode, useEffect, useRef } from "react";

import {
  motion,
  useAnimation,
  useInView,
  Transition,
  Variant,
  Variants,
} from "framer-motion";

interface FadedWrapperProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function FadedWrapper({
  children,
  className,
  delay = 150,
}: FadedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  const inView = useInView(ref, {
    margin: "0px 0px -50px 0px",
    once: true,
  });

  const hiddenAnimation: Variant = {
    translateY: -40,
    opacity: 0,
  };

  const revealAnimation: Variant = {
    translateY: 0,
    opacity: 1,
  };

  const variants: Variants = {
    hidden: hiddenAnimation,
    reveal: revealAnimation,
  };

  const transitions: Transition = {
    type: "spring",
    stiffness: 50,
    damping: 15,
    delayChildren: 0.5,
    staggerChildren: 0.5,
    delay: delay / 1000,
  };

  useEffect(() => {
    if (inView) controls.start("reveal");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
}
