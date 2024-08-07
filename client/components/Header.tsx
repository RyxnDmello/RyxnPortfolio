"use client";

import { motion, Transition, Variants } from "framer-motion";

import Icon from "@public/images/buttons/send.png";

import Logo from "./Common/Logo";
import Link from "./Header/Link";
import Heading from "./Header/Heading";
import Title from "./Header/Title";
import Button from "./Header/Button";

import styles from "./Header.module.scss";

export default function Header() {
  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    staggerChildren: 0.1,
  };

  return (
    <motion.header
      id="header"
      className={styles.header}
      transition={transitions}
      variants={variants}
      initial="hidden"
      animate="reveal"
    >
      <nav className={styles.nav}>
        <Logo />

        <div className={styles.links}>
          <div>
            <Link url="#pricing" text="Services" solid={false} />
            <Link url="#skills" text="Skills" solid={false} />
            <Link url="#projects" text="Portfolio" solid={false} />
            <Link url="#contacts" text="Contacts" solid={false} />
          </div>

          <Link url="#" text="Download CV" solid />
        </div>
      </nav>

      <Heading title="Software Developer" />

      <div className={styles.details}>
        <Title />

        <div>
          <Button url="#pricing" text="Services" icon={Icon} solid />
          <Button url="#" text="Download CV" solid={false} />
        </div>
      </div>
    </motion.header>
  );
}
