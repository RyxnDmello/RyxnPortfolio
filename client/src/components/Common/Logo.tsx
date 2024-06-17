import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <a className={`${styles.logo} logo`}>
      <p>RD</p>
    </a>
  );
}
