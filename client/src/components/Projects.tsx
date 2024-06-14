import useProjectsCatalogue from "../hooks/useProjectsCatalogue";

import Title from "./Common/Title";
import Tab from "./Projects/Tab";
import Project from "./Projects/Project";
import Expand from "./Projects/Expand";

import styles from "./Projects.module.scss";

export default function Projects() {
  const {
    tabs,
    projects,
    option,
    expandable,
    onSelectOption,
    onSetExpandable,
  } = useProjectsCatalogue();

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <Title primary="Personal" secondary="Projects" />

        <div className="scroll">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                label={tab}
                selected={option === i}
                onSelect={() => onSelectOption(i)}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.catalogue}>
        {projects.map((project, i) => {
          if (expandable) return <Project key={i} {...project} />;
          return i < 9 && <Project key={i} {...project} />;
        })}
      </div>

      {!expandable && projects.length > 9 && (
        <Expand onExpand={onSetExpandable} />
      )}
    </section>
  );
}
