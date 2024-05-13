import { ILink } from "../../interfaces/Link";

export default function NavLink({
  url,
  text,
  solid,
  external,
  direction,
}: INavLink) {
  const className = "footer-link";

  return (
    <a
      className={`${className} ${direction} ${solid && "solid"}`}
      target={external ? "_blank" : "_self"}
      href={url}
    >
      <p className={`${className}-text`}>{text}</p>
    </a>
  );
}

interface INavLink extends ILink {
  external: boolean;
  direction: "row" | "column";
}
