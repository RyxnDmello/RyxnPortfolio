export default function Title({ opening, name, description }: ITitle) {
  return (
    <>
      <h1 className="header-title opening">{opening}</h1>
      <h1 className="header-title name">{name}</h1>
      <h1 className="header-title description">{description}</h1>
    </>
  );
}

interface ITitle {
  opening: string;
  name: string;
  description: string;
}
