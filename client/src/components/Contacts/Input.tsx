import { IInput } from "../../interfaces/Contact";

import Required from "../../images/inputs/required.png";

import styles from "./Input.module.scss";

export default function Input({
  label,
  icon,
  value,
  name,
  type,
  error,
  required,
  onChange,
}: IInput) {
  return (
    <div className={`${styles.input} ${error && styles.error}`}>
      <div className={`${styles.label} ${value!.length > 0 && styles.hidden}`}>
        <img src={icon} />
        <p>{label}</p>
      </div>

      {required && <img src={Required} />}

      {type === "textarea" ? (
        <textarea
          className={styles.field}
          onChange={onChange}
          value={value}
          name={name}
          required
          rows={5}
        ></textarea>
      ) : (
        <input
          className={styles.field}
          onChange={onChange}
          required={required}
          autoComplete="off"
          value={value}
          name={name}
          type={type}
        />
      )}
    </div>
  );
}
