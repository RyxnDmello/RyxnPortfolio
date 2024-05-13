import Icon from "../../images/pricing/tick.svg";

export default function Point({ point }: { point: string }) {
  const className = "pricing-card-point";

  return (
    <div className={className}>
      <img className={`${className}-icon`} src={Icon} />
      <p className={`${className}-text`}>{point}</p>
    </div>
  );
}
