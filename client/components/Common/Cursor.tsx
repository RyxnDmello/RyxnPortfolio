"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

import styles from "./Cursor.module.scss";

export default function Cursor() {
  const [active, setActive] = useState<boolean>(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const opacity = useMotionValue(1);
  const width = useMotionValue(20);

  const springCursorX = useSpring(cursorX, { duration: 300 });
  const springCursorY = useSpring(cursorY, { duration: 300 });
  const springWidth = useSpring(width, { duration: 100 });

  const cursorMove = (event: MouseEvent) => {
    cursorX.set(event.clientX - springWidth.get() / 2);
    cursorY.set(event.clientY - springWidth.get() / 2);
  };

  const cursorDown = () => {
    springWidth.set(15);
  };

  const cursorUp = () => {
    springWidth.set(20);
  };

  const toggle = () => {
    const excluded = ["a", "button"].map((e) => document.querySelectorAll(e));

    if (active) {
      excluded.forEach((ex) => {
        ex.forEach((el) => el.classList.remove("cursor-reveal"));
        ex.forEach((el) => el.classList.add("cursor-disable"));
      });

      document.body.style.cursor = "none";
      opacity.set(1);

      setActive(false);
      return;
    }

    excluded.forEach((ex) => {
      ex.forEach((el) => el.classList.remove("cursor-disable"));
      ex.forEach((el) => el.classList.add("cursor-reveal"));
    });

    document.body.style.cursor = "default";
    opacity.set(0);

    setActive(true);
  };

  useEffect(() => {
    document.getElementById("toggle")!.addEventListener("click", toggle);
    window.addEventListener("mousemove", cursorMove);
    window.addEventListener("mousedown", cursorDown);
    window.addEventListener("mouseup", cursorUp);

    return () => {
      document.getElementById("toggle")!.removeEventListener("click", toggle);
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
        opacity: opacity,
      }}
    ></motion.div>
  );
}
