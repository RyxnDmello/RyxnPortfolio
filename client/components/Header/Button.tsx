import Image, { StaticImageData } from "next/image";

import styles from "./Button.module.scss";

interface ButtonProps {
  url: string;
  text: string;
  solid: boolean;
  icon?: StaticImageData;
}

export default function Button({ url, text, icon, solid }: ButtonProps) {
  return (
    <a className={`${solid ? styles.solid : styles.button} scroll`} href={url}>
      <p>{text}</p>
      {icon && <Image src={icon} width={0} height={0} alt="" />}
    </a>
  );
}
