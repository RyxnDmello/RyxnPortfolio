import { ICard } from "../../interfaces/Pricing";

import Point from "./Point";

export default function Card({ plan, price, about, points }: ICard) {
  const className = "pricing-card";

  return (
    <div className={className}>
      <h2 className={`${className}-plan`}>{plan} Plan</h2>

      <div className={`${className}-details`}>
        <h4 className={`${className}-price`}>
          <span className="unit">₹</span>
          {price}
          <span>/month</span>
        </h4>

        <p className={`${className}-about`}>{about}</p>
      </div>

      <div className={`${className}-points`}>
        {points.map((point) => (
          <Point point={point} />
        ))}
      </div>
    </div>
  );
}