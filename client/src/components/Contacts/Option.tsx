import { IOptional } from "../../interfaces/Contact";

import ArrowIcon from "../../images/buttons/right.svg";

export default function Option({ name, isSelected, onSelect }: IOptional) {
  const className = "contact-option";

  return (
    <div
      className={`${className} ${isSelected ? "selected" : undefined}`}
      onClick={onSelect}
    >
      <p className={`${className}-name`}>{name}</p>

      <div className={`${className}-icon`}>
        <img className={`${className}-icon-image`} src={ArrowIcon} />
      </div>
    </div>
  );
}
