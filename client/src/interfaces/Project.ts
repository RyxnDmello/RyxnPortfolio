export interface IProject {
  image: string;
  title: string;
  about: string;
  explore: IExplore[];
}

export interface IExplore {
  url: string;
  icon: string;
  label?: string;
  platform?: "website" | "desktop" | "android";
}

export interface IOption {
  title: string;
  icon: string;
}

export interface IOptional extends IOption {
  isActive: boolean;
  onClick: () => void;
}
