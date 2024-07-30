import { Link as _ } from "@interfaces/Link";

import styles from "./Link.module.scss";

export default function Link({ url, text, solid }: _) {
  return (
    <a className={solid ? styles.solid : styles.link} href={url}>
      <p>{text}</p>
    </a>
  );
}
