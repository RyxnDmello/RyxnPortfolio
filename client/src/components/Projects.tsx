import { options } from "../models/Options";

import useProjectsCatalogue from "../hooks/useProjectsCatalogue";

import Dashes from "./Decorations/Dashes";

import Title from "./Common/Title";
import Option from "./Projects/Option";
import Project from "./Projects/Project";
import Expand from "./Projects/Expand";

export default function Projects() {
  const { projects, option, expandable, onSelectOption, onSetExpandable } =
    useProjectsCatalogue();

  return (
    <section id="projects">
      <div className="projects-header">
        <Title primary="Personal" secondary="Projects" />

        <div className="projects-navbar scroll">
          {options.map((label, i) => {
            return (
              <Option
                key={i}
                label={label}
                selected={option === i}
                onSelect={() => onSelectOption(i)}
              />
            );
          })}
        </div>
      </div>

      <div className="projects-catalogue">
        {projects.map((project, i) => {
          if (expandable) return <Project key={i} {...project} />;
          return i < 9 && <Project key={i} {...project} />;
        })}
      </div>

      {!expandable && projects.length > 9 && (
        <Expand onExpand={onSetExpandable} />
      )}

      <Dashes />
      <Dashes />
    </section>
  );
}
