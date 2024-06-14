import styles from "./Expand.module.scss";

export default function Expand({ onExpand }: IExpand) {
  return (
    <div className={`${styles.expand} scroll`} onClick={onExpand}>
      <p>View More</p>
    </div>
  );
}

interface IExpand {
  onExpand: () => void;
}
