import { ILink } from "../../interfaces/Social";

export default function Social({ url, icon }: ILink) {
  const className = "footer-social-link";

  return (
    <a className={className} href={url}>
      <img className={`${className}-icon`} src={icon} />
    </a>
  );
}
