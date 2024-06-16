import { IButton } from "../../interfaces/Link";

import styles from "./Button.module.scss";

export default function Button({ url, text, icon, solid }: IButton) {
  return (
    <a className={`${solid ? styles.solid : styles.button} scroll`} href={url}>
      <p>{text}</p>
      {icon && <img src={icon} />}
    </a>
  );
}
