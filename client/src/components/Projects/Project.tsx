import { IProject } from "../../interfaces/Project";

import Link from "./Project/Link";

export default function Project({ title, about, image, links }: IProject) {
  const className = "projects-project";

  return (
    <div className={`${className}-wrapper scroll`}>
      <div className={className}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-title`}>{title}</h2>
          <img className={`${className}-background`} src={image} />
        </div>

        <div className={`${className}-details`}>
          <p className={`${className}-about`}>{about}</p>
          <hr className={`${className}-divider`} />

          <div className={`${className}-links`}>
            <Link {...links[0]} />

            <div className={`${className}-platform-links`}>
              {links.map((link, i) => {
                return link.platform !== "source" && <Link key={i} {...link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
