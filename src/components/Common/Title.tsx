export default function Title({ primary, secondary, isCentre }: ITitle) {
  const className = `title ${isCentre ? "centre" : undefined}`;

  return (
    <h1 className={className}>
      <span>{primary}</span> {secondary}
    </h1>
  );
}

interface ITitle {
  primary: string;
  secondary: string;
  isCentre?: boolean;
}
