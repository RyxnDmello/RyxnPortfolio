import { IProject } from "../../interfaces/Project";

export default function Project({ title, about, image, skills }: IProject) {
  const className = "projects-project";

  return (
    <div className="projects-project-wrapper">
      <div className={className}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-title`}>{title}</h2>
          <img className={`${className}-background`} src={image} />
        </div>

        <div className="projects-project-details">
          <p className={`${className}-about`}>{about}</p>

          <hr className={`${className}-divider`} />

          <div className={`${className}-skills`}>
            {skills.map((skill) => {
              return (
                <div className={`${className}-skill`}>
                  <img className={`${className}-skill-icon`} src={skill.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
