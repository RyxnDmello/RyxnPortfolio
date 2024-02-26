import Skill from "./Domain/Skill";

import { IDomain } from "../../interfaces/Domain";

export default function Domain({ title, image, skills }: IDomain) {
  const className = "skills-domain";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <div className={`${className}-header`}>
          <img className={`${className}-image`} src={image} />
          <h2 className={`${className}-title`}>{title}</h2>
        </div>

        <div className={`${className}-skills`}>
          {skills.map((skill) => (
            <Skill {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
