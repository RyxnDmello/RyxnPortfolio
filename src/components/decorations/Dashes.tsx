import { IDecoration } from "../../interfaces/Decoration";

export default function Dashes({
  count = 10,
  direction = "column",
}: IDecoration) {
  return (
    <div className={`decoration dashes ${direction}`}>
      {Array.from({ length: count }, () => {
        return <div className="dash"></div>;
      })}
    </div>
  );
}
