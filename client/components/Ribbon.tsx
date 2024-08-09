import styles from "./Ribbon.module.scss";

import Pattern from "./Ribbon/Pattern";

export default function Ribbon() {
  return (
    <div className={styles.wrapper}>
      <Pattern triples={["WEB", "APP", "GAME"]} direction={-1} />
      <Pattern triples={["GAME", "WEB", "APP"]} direction={1} />
    </div>
  );
}
