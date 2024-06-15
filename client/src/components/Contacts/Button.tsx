import styles from "./Button.module.scss";

export default function Button({ icon, type, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {icon ? <img src={icon} /> : <p>Send Request</p>}
    </button>
  );
}

interface ButtonProps {
  icon?: string;
  type: "submit" | "reset";
  onClick?: () => void;
}
