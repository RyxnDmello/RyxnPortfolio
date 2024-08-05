import Image from "next/image";

import Icon from "@public/images/pricing/tick.svg";

import styles from "./Point.module.scss";

export default function Point({ point }: { point: string }) {
  return (
    <div className={styles.point}>
      <Image src={Icon} width={0} height={0} alt="" />
      <p>{point}</p>
    </div>
  );
}
