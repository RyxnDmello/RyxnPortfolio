import styles from "./Heading.module.scss";

export default function Heading({ title }: { title: string }) {
  return <h1 className={`${styles.heading} scroll`}>{title}</h1>;
}
