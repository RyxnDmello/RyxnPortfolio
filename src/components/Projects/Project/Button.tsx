import { IExplore } from "../../../interfaces/Explore";

export default function Button({ url, label, icon, platform }: IExplore) {
  const className = "projects-project";

  return (
    <a
      className={`${className}-button ${platform ?? "github"}`}
      target="_blank"
      href={url}
    >
      <img className={`${className}-button-icon`} src={icon} />
      {label && <p className={`${className}-button-label`}>{label}</p>}
    </a>
  );
}
