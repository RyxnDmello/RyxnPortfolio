"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

import styles from "./Cursor.module.scss";

export default function Cursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const width = useMotionValue(20);

  const springCursorX = useSpring(cursorX, { duration: 300 });
  const springCursorY = useSpring(cursorY, { duration: 300 });
  const springWidth = useSpring(width, { duration: 100 });

  const cursorMove = (event: MouseEvent) => {
    cursorX.set(event.clientX - springWidth.get() / 2);
    cursorY.set(event.clientY - springWidth.get() / 2);
  };

  const cursorDown = () => springWidth.set(15);
  const cursorUp = () => springWidth.set(20);

  useEffect(() => {
    window.addEventListener("mousemove", cursorMove);
    window.addEventListener("mousedown", cursorDown);
    window.addEventListener("mouseup", cursorUp);

    return () => {
      window.removeEventListener("mousemove", cursorMove);
      window.removeEventListener("mousedown", cursorDown);
      window.removeEventListener("mouseup", cursorUp);
    };
  });

  return (
    <motion.div
      id="cursor"
      className={styles.cursor}
      style={{
        translateX: springCursorX,
        translateY: springCursorY,
        width: springWidth,
      }}
    ></motion.div>
  );
}
