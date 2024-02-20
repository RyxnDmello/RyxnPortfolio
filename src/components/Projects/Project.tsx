import { IProject } from "../../interfaces/Project";

import Skill from "./Project/Skill";
import Button from "./Project/Button";

export default function Project({
  title,
  about,
  image,
  skills,
  explore,
}: IProject) {
  const className = "projects-project";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-title`}>{title}</h2>
          <img className={`${className}-background`} src={image} />
        </div>

        <div className={`${className}-details`}>
          <p className={`${className}-about`}>{about}</p>

          <hr className={`${className}-divider`} />

          <div className={`${className}-skills`}>
            {skills.map((skill) => (
              <Skill {...skill} />
            ))}
          </div>

          <hr className={`${className}-divider`} />

          <div className={`${className}-buttons`}>
            {explore.map((button) => (
              <Button {...button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
