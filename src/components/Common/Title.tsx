export default function Title({ primary, secondary, position }: ITitle) {
  const className = `title ${position}`;

  return (
    <h1 className={className}>
      <span>{primary}</span> {secondary}
    </h1>
  );
}

interface ITitle {
  primary: string;
  secondary: string;
  position?: "center" | "right";
}
