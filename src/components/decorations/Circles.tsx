export default function Circles({ count = 6, direction = "column" }: ICircle) {
  return (
    <div className={`decoration circles ${direction}`}>
      {Array.from({ length: count }, () => {
        return <div className="circle"></div>;
      })}
    </div>
  );
}

interface ICircle {
  count?: number;
  direction?: "row" | "column";
}
