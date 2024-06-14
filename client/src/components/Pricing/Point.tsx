import Icon from "../../images/pricing/tick.svg";

import styles from "./Point.module.scss";

export default function Point({ point }: { point: string }) {
  return (
    <div className={styles.point}>
      <img src={Icon} />
      <p>{point}</p>
    </div>
  );
}
