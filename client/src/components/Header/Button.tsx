import { IButton } from "../../interfaces/Link";

export default function Button({ url, text, icon, solid }: IButton) {
  const className = "header-button";

  return (
    <a className={`${className} ${solid && "solid"} scroll`} href={url}>
      <p className={`${className}-text`}>{text}</p>

      {icon !== undefined ? (
        <img className={`${className}-icon`} src={icon} />
      ) : undefined}
    </a>
  );
}
