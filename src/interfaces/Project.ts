import { IExplore } from "./Explore";

export interface IProject {
  image: string;
  title: string;
  about: string;
  explore: IExplore[];
}

export interface IOption {
  title: string;
  icon: string;
}
