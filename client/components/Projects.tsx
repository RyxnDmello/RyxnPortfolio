"use client";

import { useEffect, useRef } from "react";

import {
  useAnimation,
  useInView,
  motion,
  Variants,
  Transition,
} from "framer-motion";

import useProjectsCatalogue from "@hooks/useProjectsCatalogue";

import Title from "./Common/Title";
import Tab from "./Projects/Tab";
import Project from "./Projects/Project";
import Expand from "./Projects/Expand";

import styles from "./Projects.module.scss";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px -500px 0px",
    once: true,
  });

  const {
    tabs,
    projects,
    option,
    expandable,
    onSelectOption,
    onSetExpandable,
  } = useProjectsCatalogue();

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  });

  return (
    <motion.section
      id="projects"
      className={styles.projects}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <div className={styles.header}>
        <Title title="Projects" bar={false} />

        <div className="scroll">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                label={tab}
                selected={option === i}
                onSelect={() => onSelectOption(i)}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.catalogue}>
        {projects.map((project, i) => {
          if (expandable) return <Project key={project.title} {...project} />;
          return i < 9 && <Project key={project.title} {...project} />;
        })}
      </div>

      {!expandable && projects.length > 9 && (
        <Expand onExpand={onSetExpandable} />
      )}
    </motion.section>
  );
}
