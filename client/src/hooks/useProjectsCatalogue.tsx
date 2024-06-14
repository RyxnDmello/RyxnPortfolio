import { useState } from "react";

import { IProject } from "../interfaces/Project";

import { tabs, catalogue } from "../models/Projects";

export default function useProjectsCatalogue() {
  const [projects, setProjects] = useState<IProject[]>(catalogue[0]);
  const [expandable, setExpandable] = useState<boolean>(false);
  const [option, setOption] = useState<number>(0);

  const onSelectOption = (option: number) => {
    setProjects(catalogue[option]);
    setOption(option);
  };

  const onSetExpandable = () => setExpandable(true);

  return {
    tabs,
    projects,
    option,
    expandable,
    onSelectOption,
    onSetExpandable,
  };
}
