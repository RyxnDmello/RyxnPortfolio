import { IOption } from "../../interfaces/Project";

export default function Option({ title, icon, isActive, onClick }: IOptional) {
  const className = "projects-navbar-option";

  return (
    <div
      className={`${className} ${isActive ? "active" : undefined}`}
      onClick={() => onClick()}
    >
      <img className={`${className}-image`} src={icon} />
      <p className={`${className}-title`}>{title}</p>
    </div>
  );
}

interface IOptional extends IOption {
  isActive: boolean;
  onClick: Function;
}
