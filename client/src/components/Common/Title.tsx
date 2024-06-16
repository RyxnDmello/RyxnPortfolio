import styles from "./Title.module.scss";

export default function Title({ primary, secondary, position }: ITitle) {
  return (
    <h1 className={`${styles.title} ${position} title`}>
      <span>{primary}</span> {secondary}
    </h1>
  );
}

interface ITitle {
  primary: string;
  secondary: string;
  position?: "center" | "right";
}
