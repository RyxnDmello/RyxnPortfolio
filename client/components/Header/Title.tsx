import styles from "./Title.module.scss";

export default function Title() {
  return (
    <div className={`${styles.title} scroll`}>
      <p>Hey, I Am</p>
      <p>Ryan Nolasco D Mello</p>
      <p> Passionate Web & Mobile Developer</p>
    </div>
  );
}
