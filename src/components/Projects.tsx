import { useState } from "react";

import { options } from "../models/Options";
import { projects } from "../models/Projects";

import Title from "./Common/Title";
import Option from "./Projects/Option";
import Project from "./Projects/Project";

export default function Projects() {
  const [active, setActive] = useState<number>(0);

  const onHandleActiveOption = (activeOption: number) => {
    setActive(activeOption);
  };

  return (
    <section id="projects">
      <div className="projects-header">
        <Title primary="Personal" secondary="Projects" />

        <div className="projects-navbar">
          {options.map((option, ID) => {
            return (
              <Option
                {...option}
                isActive={active === ID}
                onClick={() => onHandleActiveOption(ID)}
              />
            );
          })}
        </div>
      </div>

      <div className="projects-carousel">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </section>
  );
}
