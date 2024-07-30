import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <a className={`${styles.logo} logo scroll`}>
      <p>RD</p>
    </a>
  );
}
