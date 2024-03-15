import { cards } from "../models/Pricing";

import Title from "./Common/Title";
import Card from "./Pricing/Card";

export default function Pricing() {
  return (
    <section id="pricing">
      <Title primary="Explore" secondary="Plans" isCentre />

      <div className="pricing-cards">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
