import Image from "next/image";

import { Link as _ } from "../../interfaces/Project";

import styles from "./Link.module.scss";

export default function Link({ url, text, icon, platform }: _) {
  return (
    <a
      className={`${styles.link} ${styles[platform]}`}
      target="_blank"
      href={url}
    >
      <Image src={icon} width={0} height={0} alt="" />
      {text && <p>{text}</p>}
    </a>
  );
}
