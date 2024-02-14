import { ILink } from "../../interfaces/links";

export default function Link({ URL, text, isButton }: ILink) {
  return (
    <a className={isButton ? "nav-button" : "nav-link"} href={URL}>
      <p className={`${isButton ? "nav-button" : "nav-link"}-text`}>{text}</p>
    </a>
  );
}
