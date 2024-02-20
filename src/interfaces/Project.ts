import { IExplore } from "./Explore";
import { ISkill } from "./Skill";

export interface IProject {
  image: string;
  title: string;
  about: string;
  skills: ISkill[];
  explore: IExplore[];
}

export interface IOption {
  title: string;
  icon: string;
}
