import { useState } from "react";

import { options } from "../models/Options";
import { projects } from "../models/Projects";

import Dashes from "./Decorations/Dashes";
import Circles from "./Decorations/Circles";

import Title from "./Common/Title";
import Option from "./Projects/Option";
import Project from "./Projects/Project";
import Expand from "./Projects/Expand";

export default function Projects() {
  const [active, setActive] = useState<number>(0);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const onHandleActiveOption = (activeOption: number) => {
    setActive(activeOption);
  };

  const onHandleExpanded = () => setExpanded(true);

  return (
    <section id="projects">
      <div className="projects-header">
        <Title primary="Personal" secondary="Projects" />

        <div className="projects-navbar scroll">
          {options.map((option, ID) => {
            return (
              <Option
                key={ID}
                {...option}
                isActive={active === ID}
                onClick={() => onHandleActiveOption(ID)}
              />
            );
          })}
        </div>
      </div>

      <div className="projects-catalogue">
        {projects[active].map((project, i) => {
          if (isExpanded) return <Project key={i} {...project} />;
          return i < 9 && <Project key={i} {...project} />;
        })}
      </div>

      {!isExpanded && projects[active].length > 9 && (
        <Expand onClick={() => onHandleExpanded()} />
      )}

      <Circles />
      <Dashes />
    </section>
  );
}
