import { useEffect, useRef } from "react";
import Image from "next/image";

import {
  useInView,
  motion,
  Variants,
  useAnimation,
  Transition,
} from "framer-motion";

import { Project as _ } from "@interfaces/Project";

import Link from "./Link";

import styles from "./Project.module.scss";

export default function Project({ title, about, image, links }: _) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px -70px 0px",
    amount: 1,
    once: true,
  });

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    duration: 1,
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.div
      className={`${styles.project} scroll`}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <div>
        <div className={styles.header}>
          <p>{title}</p>
          <Image src={image} width={0} height={0} alt="" />
        </div>

        <div className={styles.details}>
          <p className={styles.about}>{about}</p>
          <hr className={styles.divider} />

          <div className={styles.links}>
            <Link {...links[0]} />

            <div>
              {links.map((link, i) => {
                return link.platform !== "source" && <Link key={i} {...link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
