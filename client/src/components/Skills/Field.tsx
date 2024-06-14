import { IField } from "../../interfaces/Skill";

import Skill from "./Skill";

import styles from "./Field.module.scss";

export default function Field({ title, image, skills }: IField) {
  const className = "skills-domain";

  return (
    <div className={`${styles.field} scroll`}>
      <div className={className}>
        <div className={styles.header}>
          <img className={`${className}-image`} src={image} />
          <p className={`${className}-title`}>{title}</p>
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
