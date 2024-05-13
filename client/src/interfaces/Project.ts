export interface IProject {
  image: string;
  title: string;
  about: string;
  links: ILink[];
}

export interface ILink {
  url: string;
  icon: string;
  text?: string;
  platform: "source" | "website" | "desktop" | "mobile";
}
