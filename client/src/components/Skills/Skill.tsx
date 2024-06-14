import { ISkill } from "../../interfaces/Skill";

import styles from "./Skill.module.scss";

export default function Skill({ name, icon }: ISkill) {
  return (
    <div className={styles.skill}>
      <img src={icon} />
      <p>{name}</p>
    </div>
  );
}
