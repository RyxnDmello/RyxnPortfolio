import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  bar?: boolean;
  dot?: boolean;
  position?: "LEFT" | "CENTRE" | "RIGHT";
}

export default function Title({
  title,
  dot = true,
  bar = true,
  position = "LEFT",
}: TitleProps) {
  return (
    <div className={`title ${styles.title} ${position?.toLowerCase()}`}>
      <h1>
        {title}
        {dot && <span>.</span>}
      </h1>
      {bar && <div></div>}
    </div>
  );
}
