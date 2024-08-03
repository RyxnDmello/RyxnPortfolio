import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  bar?: boolean;
  dot?: boolean;
  position?: "CENTRE" | "RIGHT";
}

export default function Title({
  title,
  position,
  dot = true,
  bar = true,
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
