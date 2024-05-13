import { IDomain } from "../../interfaces/Skill";

import Skill from "./Domain/Skill";

export default function Domain({ title, image, skills }: IDomain) {
  const className = "skills-domain";

  return (
    <div className={`${className}-wrapper scroll`}>
      <div className={className}>
        <div className={`${className}-header`}>
          <img className={`${className}-image`} src={image} />
          <h2 className={`${className}-title`}>{title}</h2>
        </div>

        <div className={`${className}-skills`}>
          {skills.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
