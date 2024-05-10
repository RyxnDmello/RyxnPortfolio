import { ILinkable } from "../../interfaces/Link";

export default function Link({
  url,
  text,
  isButton,
  isBlank,
  direction = "column",
}: ILinkable) {
  const className = "footer-link";

  return (
    <a
      className={`${className} ${direction} ${isButton && "solid"}`}
      target={isBlank ? "_blank" : "_self"}
      href={url}
    >
      <p className={`${className}-text`}>{text}</p>
    </a>
  );
}
