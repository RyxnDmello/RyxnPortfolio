import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  about: string;
  links: Link[];
  image: StaticImageData;
}

export interface Link {
  url: string;
  text?: string;
  icon: StaticImageData;
  platform: "source" | "website" | "desktop" | "mobile";
}
