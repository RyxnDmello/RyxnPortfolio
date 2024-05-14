export default function Button({ icon, type, onClick }: IButton) {
  const className = "form-button";

  return (
    <button className={className} type={type} onClick={onClick}>
      {!icon && <p className={`${className}-text`}>Send Request</p>}
      {icon && <img className={`${className}-icon`} src={icon} />}
    </button>
  );
}

interface IButton {
  icon?: string;
  type: "submit" | "reset";
  onClick?: () => void;
}
