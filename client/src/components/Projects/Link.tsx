import { ILink } from "../../interfaces/Project";

import styles from "./Link.module.scss";

export default function Link({ url, text, icon, platform }: ILink) {
  return (
    <a
      className={`${styles.link} ${styles[platform]}`}
      target="_blank"
      href={url}
    >
      <img src={icon} />
      {text && <p>{text}</p>}
    </a>
  );
}
