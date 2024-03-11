import ArrowIcon from "../../images/buttons/right.svg";

export default function Option({ name, onSelect }: IOption) {
  const className = "contact-option";

  return (
    <div className={className} onClick={onSelect}>
      <p className={`${className}-name`}>{name}</p>

      <div className={`${className}-icon`}>
        <img className={`${className}-icon-image`} src={ArrowIcon} />
      </div>
    </div>
  );
}

interface IOption {
  name: string;
  onSelect: () => void;
}
