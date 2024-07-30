import Image from "next/image";

import Icon from "@public/images/buttons/top.svg";

import styles from "./Top.module.scss";

export default function Top() {
  return (
    <a className={`${styles.top} scroll`} href="#">
      <Image src={Icon} width={0} height={0} alt="" />
    </a>
  );
}
