import styles from "./Dashes.module.scss";

interface DashesProps {
  direction?: "ROW" | "COLUMN";
  count?: number;
}

export default function Dashes({
  count = 10,
  direction = "COLUMN",
}: DashesProps) {
  return (
    <div
      className={`${styles.dashes} ${
        styles[direction.toLowerCase()]
      } dashes scroll`}
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}
