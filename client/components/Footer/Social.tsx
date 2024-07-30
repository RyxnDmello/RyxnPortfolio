import Image from "next/image";

import { Link } from "../../interfaces/Social";

import styles from "./Social.module.scss";

export default function Social({ url, icon }: Link) {
  return (
    <a className={styles.social} href={url}>
      <Image src={icon} width={0} height={0} alt="" />
    </a>
  );
}
