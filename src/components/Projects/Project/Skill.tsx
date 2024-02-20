import { ISkill } from "../../../interfaces/Skill";

export default function Skill({ icon }: ISkill) {
  const className = "projects-project";

  return (
    <div className={`${className}-skill`}>
      <img className={`${className}-skill-icon`} src={icon} />
    </div>
  );
}
