import { ISkill } from "./Skill";

export interface IProject {
  image: string;
  title: string;
  about: string;
  skills: ISkill[];
}

export interface IOption {
  title: string;
  icon: string;
}
