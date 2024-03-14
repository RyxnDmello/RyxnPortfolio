import TickIcon from "../../images/pricing/tick.svg";

export default function Point({ point }: { point: string }) {
  const className = "pricing-card-point";

  return (
    <div className={className}>
      <img className={`${className}-icon`} src={TickIcon} />
      <p className={`${className}-text`}>{point}</p>
    </div>
  );
}
