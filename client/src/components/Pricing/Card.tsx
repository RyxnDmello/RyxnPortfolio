import { ICard } from "../../interfaces/Pricing";

import Point from "./Point";

import styles from "./Card.module.scss";

export default function Card({ plan, price, about, points }: ICard) {
  return (
    <div className={`${styles.card} scroll`}>
      <h2>{plan} Plan</h2>

      <div className={styles.details}>
        <h4>
          <span>₹</span> {price} <span>/month</span>{" "}
        </h4>

        <p>{about}</p>
      </div>

      <div className={styles.points}>
        {points.map((point, i) => (
          <Point key={i} point={point} />
        ))}
      </div>

      <a className={styles.button} href="#contacts">
        <p>Discuss Your Idea</p>
      </a>
    </div>
  );
}
