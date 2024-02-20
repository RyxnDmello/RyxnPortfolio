import { IExplore } from "../../../interfaces/Explore";

export default function Button({ label, icon, URL }: IExplore) {
  const className = "projects-project";

  return (
    <a
      className={`${className}-button ${
        label === undefined ? "rounded" : "square"
      }`}
      target="_blank"
      href={URL}
    >
      <img className={`${className}-button-icon`} src={icon} />

      {label !== undefined ? (
        <p className={`${className}-button-label`}>{label}</p>
      ) : undefined}
    </a>
  );
}
