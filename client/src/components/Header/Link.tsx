import { ILink } from "../../interfaces/Link";

export default function Link({ url, text, solid }: ILink) {
  const className = "nav-link"

  return (
    <a className={`${className} ${solid && "solid"}`} href={url}>
      <p className={`${className}-text`}>{text}</p>
    </a>
  );
}
