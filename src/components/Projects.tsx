import { useState } from "react";

import { options } from "../models/Options";

import Title from "./Common/Title";
import Option from "./Projects/Option";

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
                icon={option.icon}
                title={option.title}
                isActive={active === ID}
                onClick={() => onHandleActiveOption(ID)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
