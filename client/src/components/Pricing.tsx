import { cards } from "../models/Pricing";

import Dashes from "./Decorations/Dashes.tsx";
import Title from "./Common/Title";
import Card from "./Pricing/Card";

import styles from "./Pricing.module.scss";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <Title primary="Explore" secondary="Plans" />

      <div className={styles.cards}>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      <Dashes />
    </section>
  );
}
