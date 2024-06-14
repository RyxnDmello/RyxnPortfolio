import { ISkill } from "../../interfaces/About";

import styles from "./Skill.module.scss";

export default function Skill({ title, rating = 5 }: ISkill) {
  return (
    <div className={`${styles.skill} scroll`}>
      <p>{title}</p>

      <div className={styles.ratings}>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div
              key={i}
              className={`${styles.bullet} ${i < rating && styles.solid}`}
            />
          );
        })}
      </div>
    </div>
  );
}
