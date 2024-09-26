import Image from "next/image";

import { Input as _ } from "../../interfaces/Contact";

import Required from "@public/inputs/required.png";

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
}: _) {
  return (
    <div className={`${styles.input} ${error && styles.error}`}>
      <div className={`${styles.label} ${value!.length > 0 && styles.hidden}`}>
        <Image src={icon} height={0} width={0} alt="" />
        <p>{label}</p>
      </div>

      {required && <Image src={Required} width={0} height={0} alt="" />}

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
