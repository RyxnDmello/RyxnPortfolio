import Image from "next/image";

import { Button } from "../../interfaces/Link";

import styles from "./Social.module.scss";

export default function Social({ url, icon }: Button) {
  return (
    <a className={styles.social} href={url}>
      <Image src={icon!} width={0} height={0} alt="" />
    </a>
  );
}
