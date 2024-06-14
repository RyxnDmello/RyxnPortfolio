import styles from "./Dashes.module.scss";

export default function Dashes({ count = 10, direction = "column" }: IDashes) {
  return (
    <div className={`${styles.dashes} ${styles[direction]}`}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}

interface IDashes {
  direction?: "row" | "column";
  count?: number;
}
