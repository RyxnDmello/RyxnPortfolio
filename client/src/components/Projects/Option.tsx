export default function Option({ label, selected, onSelect }: IOption) {
  const className = "projects-navbar-option";

  return (
    <div className={`${className} ${selected && "active"}`} onClick={onSelect}>
      <p className={`${className}-label`}>{label}</p>
    </div>
  );
}

export interface IOption {
  label: string;
  selected: boolean;
  onSelect: () => void;
}
