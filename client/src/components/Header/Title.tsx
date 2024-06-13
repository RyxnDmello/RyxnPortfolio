import styles from "./Title.module.scss";

export default function Title() {
  return (
    <h1 className={`${styles.title} scroll`}>
      <span>Hey, I Am</span> <br />
      <span>Ryan Nolasco D Mello</span> <br />
      <span> Passionate Web & Mobile Developer</span>
    </h1>
  );
}
