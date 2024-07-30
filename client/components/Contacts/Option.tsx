import Image from "next/image";

import Icon from "@public/images/buttons/right.svg";

import styles from "./Option.module.scss";

interface OptionProps {
  name: string;
  active: boolean;
  onSelect: () => void;
}

export default function Option({ name, active, onSelect }: OptionProps) {
  return (
    <div
      className={`${styles.option} ${active && styles.active}`}
      onClick={onSelect}
    >
      <p>{name}</p>

      <div>
        <Image src={Icon} width={0} height={0} alt="" />
      </div>
    </div>
  );
}
