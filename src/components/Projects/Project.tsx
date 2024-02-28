import { IProject } from "../../interfaces/Project";

import Button from "./Button";

export default function Project({ title, about, image, explore }: IProject) {
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

          <div className={`${className}-buttons`}>
            <Button {...explore[0]} />

            <div className={`${className}-buttons-platforms`}>
              {explore.map((button, i) => {
                return button.platform && <Button key={i} {...button} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
