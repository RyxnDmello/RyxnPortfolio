import { ISkill } from "../../../interfaces/Domain";

export default function Skill({ name, icon }: ISkill) {
  return (
    <div className="skills-domain-skill">
      <img className="skills-domain-skill-icon" src={icon} />
      <h2 className="skills-domain-skill-name">{name}</h2>
    </div>
  );
}
