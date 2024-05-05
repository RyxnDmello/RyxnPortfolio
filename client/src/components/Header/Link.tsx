import { ILink } from "../../interfaces/Link";

export default function Link({ url: URL, text, isButton }: ILink) {
  const className = isButton ? "nav-button" : "nav-link";

  return (
    <a className={className} href={URL}>
      <p className={`${className}-text`}>{text}</p>
    </a>
  );
}
