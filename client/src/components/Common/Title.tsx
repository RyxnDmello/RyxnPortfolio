export default function Title({ primary, secondary, position }: ITitle) {
  const className = `${position} scroll`;

  return (
    <h1 id="title" className={className}>
      <span>{primary}</span> {secondary}
    </h1>
  );
}

interface ITitle {
  primary: string;
  secondary: string;
  position?: "center" | "right";
}
