import styles from "./Title.module.scss";

interface TitleProps {
  primary: string;
  secondary: string;
  position?: "CENTRE" | "RIGHT";
}

export default function Title({ primary, secondary, position }: TitleProps) {
  return (
    <h1 className={`${styles.title} ${position?.toLowerCase()} title scroll`}>
      <span>{primary}</span> {secondary}
    </h1>
  );
}
