import { useEffect } from "react";
import { useAnimate, motion, ValueAnimationTransition } from "framer-motion";

import styles from "./Triple.module.scss";

interface RibbonProps {
  triples: string[];
  direction: 1 | -1;
}

export default function Triple({ triples, direction }: RibbonProps) {
  const [scope, animate] = useAnimate();

  const properties = { translateX: `${direction * 50}%` };

  const transitions: ValueAnimationTransition = {
    repeatType: "mirror",
    ease: "easeInOut",
    repeat: Infinity,
    type: "spring",
    duration: 2,
    delay: 2,
  };

  useEffect(() => {
    animate(scope.current, properties, transitions);
  }, [scope]);

  return (
    <motion.div ref={scope} className={styles.triple}>
      {triples.map((triple, i) => (
        <p key={i}>{triple} DEVELOPER</p>
      ))}
    </motion.div>
  );
}
