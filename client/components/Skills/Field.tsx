import Image from "next/image";

import { Field as _ } from "../../interfaces/Skill";

import Skill from "./Skill";

import styles from "./Field.module.scss";

export default function Field({ title, image, skills }: _) {
  return (
    <div className={`${styles.field} scroll`}>
      <div>
        <div className={styles.header}>
          <Image src={image} width={0} height={0} alt="" />
          <p>{title}</p>
        </div>

        <div className={styles.skills}>
          {skills.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
