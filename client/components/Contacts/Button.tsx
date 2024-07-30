import Image, { StaticImageData } from "next/image";

import styles from "./Button.module.scss";

export default function Button({ icon, type, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {icon ? (
        <Image src={icon} width={0} height={0} alt="" />
      ) : (
        <p>Send Request</p>
      )}
    </button>
  );
}

interface ButtonProps {
  icon?: StaticImageData;
  type: "submit" | "reset";
  onClick?: () => void;
}
