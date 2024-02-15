import { ILink } from "../../interfaces/links";

export default function Button({ URL, text, icon, isSolid }: IButton) {
  return (
    <a className={`header-button ${isSolid ? "solid" : undefined}`} href={URL}>
      <p className="header-button-text">{text}</p>
      {icon !== undefined ? <ButtonImage icon={icon} /> : undefined}
    </a>
  );
}

function ButtonImage({ icon }: { icon: string }) {
  return <img className="header-button-image" src={icon} />;
}

interface IButton extends ILink {
  icon?: string;
  isSolid?: boolean;
}
