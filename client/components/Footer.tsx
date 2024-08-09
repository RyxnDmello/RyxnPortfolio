"use client";

import {
  useInView,
  useAnimation,
  motion,
  Variants,
  Transition,
} from "framer-motion";

import Image from "next/image";

import { links, inspires } from "@models/Footer";
import { socials } from "@models/Socials";

import Copyright from "@public/images/buttons/copyright.svg";
import GitHub from "@public/images/buttons/github.svg";

import Logo from "./Common/Logo";
import Top from "./Common/Top";
import Link from "./Footer/Link";
import Social from "./Footer/Social";

import styles from "./Footer.module.scss";
import { useEffect, useRef } from "react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    amount: "all",
    once: true,
  });

  const parentVariants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const parentTransitions: Transition = {
    type: "spring",
    delayChildren: 0.25,
    staggerChildren: 0.15,
  };

  const childrenVariants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.footer
      id="footer"
      className={styles.footer}
      transition={parentTransitions}
      variants={parentVariants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <motion.div className={styles.top} variants={childrenVariants}>
        <Logo />

        <div>
          {links.map((link, i) => (
            <Link key={i} {...link} external={false} direction="COLUMN" />
          ))}
        </div>
      </motion.div>

      <hr />

      <div className={styles.middle}>
        <div className={styles.features}>
          <motion.div variants={childrenVariants}>
            <p>Inspired</p>

            <div>
              {inspires.map((inspire, i) => (
                <Link key={i} {...inspire} external direction="ROW" />
              ))}
            </div>
          </motion.div>

          <motion.div variants={childrenVariants}>
            <p>Connect</p>

            <div>
              {socials.map((social, i) => (
                <Social key={i} {...social} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          className={`${styles.message} scroll`}
          variants={childrenVariants}
        >
          Let's <span>Build</span> Together
        </motion.p>
      </div>

      <hr />

      <motion.div className={styles.bottom} variants={childrenVariants}>
        <div>
          <Image src={Copyright} width={0} height={0} alt="" />
          <p>{YEAR} • Ryan Nolasco D Mello</p>
        </div>

        <a href="https://github.com//RyxnDmello" target="_blank">
          <Image src={GitHub} width={0} height={0} alt="" />
          <p>GitHub</p>
        </a>
      </motion.div>

      <Top />
    </motion.footer>
  );
}
