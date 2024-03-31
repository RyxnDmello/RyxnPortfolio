import Icon from "../../images/buttons/top.svg";

export default function Top() {
  const className = "top";

  return (
    <a id={className} href="#">
      <img className={`${className}-icon`} src={Icon} />
    </a>
  );
}
