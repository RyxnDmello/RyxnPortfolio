import Image from "next/image";

import { Skill as _ } from "../../interfaces/Skill";

import styles from "./Skill.module.scss";

export default function Skill({ name, icon }: _) {
  return (
    <div className={styles.skill}>
      <Image src={icon} width={0} height={0} alt="" />
      <p>{name}</p>
    </div>
  );
}
