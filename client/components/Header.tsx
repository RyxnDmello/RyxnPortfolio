"use client";

import { motion, Transition, Variants } from "framer-motion";

import { socials } from "@models/Socials";

import Logo from "./Common/Logo";
import Social from "./Header/Social";
import Toggle from "./Header/Toggle";
import Link from "./Header/Link";

import styles from "./Header.module.scss";

export default function Header() {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "keyframes",
    delayChildren: 0.125,
    staggerChildren: 0.125,
  };

  return (
    <div className={styles.wrapper}>
      <motion.header
        className={styles.header}
        transition={transitions}
        variants={variants}
        initial="hidden"
        animate="reveal"
      >
        <nav className={styles.nav}>
          <motion.div variants={variants}>
            <Logo />
          </motion.div>

          <div className={styles.links}>
            <div>
              <Toggle />
              <Link url="#pricing" text="Services" solid={false} />
              <Link url="#skills" text="Skills" solid={false} />
              <Link url="#projects" text="Portfolio" solid={false} />
              <Link url="#contacts" text="Contacts" solid={false} />
            </div>

            <Link url="#" text="Download CV" solid />
          </div>
        </nav>

        <div>
          <motion.h1 variants={variants}>
            <span>I'm</span> Ryan Nolasco D Mello
          </motion.h1>

          <motion.div variants={variants}>
            <p>Software Developer</p>
            <p>Software Developer</p>
          </motion.div>

          <div>
            {socials.map((social) => (
              <Social key={social.url} {...social!} />
            ))}
          </div>
        </div>
      </motion.header>
    </div>
  );
}
