import { ILink } from "../../interfaces/Link";

import styles from "./Link.module.scss";

export default function Link({ url, text, solid }: ILink) {
  return (
    <a className={solid ? styles.solid : styles.link} href={url}>
      <p>{text}</p>
    </a>
  );
}
