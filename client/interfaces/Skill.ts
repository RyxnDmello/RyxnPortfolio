import { StaticImageData } from "next/image";

export interface Field {
  title: string;
  skills: Skill[];
  image: StaticImageData;
}

export interface Skill {
  name: string;
  icon: StaticImageData;
}
