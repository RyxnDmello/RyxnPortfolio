import { ILink } from "../../../interfaces/Project";

export default function Link({ url, text, icon, platform }: ILink) {
  const className = "projects-project-link";

  return (
    <a className={`${className} ${platform}`} href={url} target="_blank">
      <img className={`${className}-icon`} src={icon} />
      {text && <p className={`${className}-text`}>{text}</p>}
    </a>
  );
}
