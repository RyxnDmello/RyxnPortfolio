import { ILink } from "../../interfaces/Link";

import styles from "./Link.module.scss";

export default function Link({
  url,
  text,
  solid,
  external,
  direction,
}: INavLink) {
  return (
    <a
      className={`${styles.link} ${styles[direction]} ${solid && styles.solid}`}
      target={external ? "_blank" : "_self"}
      href={url}
    >
      <p>{text}</p>
    </a>
  );
}

interface INavLink extends ILink {
  external: boolean;
  direction: "row" | "column";
}
