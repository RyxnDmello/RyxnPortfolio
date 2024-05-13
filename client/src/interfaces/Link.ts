export interface ILink {
  url: string;
  text: string;
  solid: boolean;
}

export interface IButton extends ILink {
  icon?: string;
}
