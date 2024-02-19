import Title from "./Domain/Title";
import Skill from "./Domain/Skill";

import { IDomain } from "../../interfaces/Domain";

export default function Domain({ title, skills }: IDomain) {
  return (
    <div className="skills-domain-wrapper">
      <div className="skills-domain">
        <Title title={title} />

        <div className="skills-domain-skills">
          {skills.map((skill) => (
            <Skill icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
