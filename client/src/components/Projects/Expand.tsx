export default function Expand({ onExpand }: IExpand) {
  const className = "projects-expand-button";

  return (
    <div className={`${className} scroll`} onClick={onExpand}>
      <p className={`${className}-text`}>View More</p>
    </div>
  );
}

interface IExpand {
  onExpand: () => void;
}
