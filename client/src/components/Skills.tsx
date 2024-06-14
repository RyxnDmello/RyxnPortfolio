import { fields } from "../models/Skills";

import Title from "./Common/Title";
import Field from "./Skills/Field";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <Title primary="Technical" secondary="Skills" />

      <div className={styles.catalogue}>
        {fields.map((field, i) => (
          <Field key={i} {...field} />
        ))}
      </div>
    </section>
  );
}
