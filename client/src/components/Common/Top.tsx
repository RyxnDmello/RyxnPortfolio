import Icon from "../../images/buttons/top.svg";

import styles from "./Top.module.scss";

export default function Top() {
  return (
    <a className={`${styles.top} scroll`} href="#">
      <img src={Icon} />
    </a>
  );
}
