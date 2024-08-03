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

interface FadedContainerProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function FadedContainer({
  children,
  className,
  delay = 150,
}: FadedContainerProps) {
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
    delay: 3,
  };

  return (
    <motion.div
      className={className}
      transition={transitions}
      variants={variants}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
}
