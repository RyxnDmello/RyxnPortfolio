import ArrowIcon from "../../images/buttons/right.svg";

import styles from "./Option.module.scss";

export default function Option({ name, active, onSelect }: OptionProps) {
  return (
    <div
      className={`${styles.option} ${active && styles.active}`}
      onClick={onSelect}
    >
      <p>{name}</p>

      <div>
        <img src={ArrowIcon} />
      </div>
    </div>
  );
}

interface OptionProps {
  name: string;
  active: boolean;
  onSelect: () => void;
}
