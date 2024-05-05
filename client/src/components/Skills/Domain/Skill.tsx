import { ISkill } from "../../../interfaces/Skill";

export default function Skill({ name, icon }: ISkill) {
  const className = "skills-domain-skill";

  return (
    <div className={className}>
      <img className={`${className}-icon`} src={icon} />
      <h2 className={`${className}-name`}>{name}</h2>
    </div>
  );
}
