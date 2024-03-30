import { IDashes } from "../../interfaces/Decoration";

export default function Dashes({ count = 10, direction = "column" }: IDashes) {
  return (
    <div className={`decoration dashes ${direction}`}>
      {Array.from({ length: count }, (_, i) => {
        return <div key={i} className="dash"></div>;
      })}
    </div>
  );
}
