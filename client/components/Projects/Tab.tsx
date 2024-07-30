import styles from "./Tab.module.scss";

interface TabProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export default function Tab({ label, selected, onSelect }: TabProps) {
  return (
    <div
      className={`${styles.tab} ${selected && styles.active}`}
      onClick={onSelect}
    >
      <p>{label}</p>
    </div>
  );
}
