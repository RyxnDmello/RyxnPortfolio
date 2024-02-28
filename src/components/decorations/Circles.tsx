import { IDecoration } from "../../interfaces/Decoration";

export default function Circles({
  count = 6,
  direction = "column",
}: IDecoration) {
  return (
    <div className={`decoration circles ${direction}`}>
      {Array.from({ length: count }, (_, i) => {
        return <div key={i} className="circle"></div>;
      })}
    </div>
  );
}
