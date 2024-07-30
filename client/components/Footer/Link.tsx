import { Link as _ } from "../../interfaces/Link";

import styles from "./Link.module.scss";

interface LinkProps extends _ {
  external: boolean;
  direction: "ROW" | "COLUMN";
}

export default function Link({
  url,
  text,
  solid,
  external,
  direction,
}: LinkProps) {
  return (
    <a
      className={`${styles.link} ${styles[direction.toLowerCase()]} ${
        solid && styles.solid
      }`}
      target={external ? "_blank" : "_self"}
      href={url}
    >
      <p>{text}</p>
    </a>
  );
}
