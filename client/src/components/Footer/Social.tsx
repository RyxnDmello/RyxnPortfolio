import { ILink } from "../../interfaces/Social";

import styles from "./Social.module.scss";

export default function Social({ url, icon }: ILink) {
  return (
    <a className={styles.social} href={url}>
      <img src={icon} />
    </a>
  );
}
