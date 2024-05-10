export interface ILink {
  url: string;
  text: string;
  isButton?: boolean;
}

export interface ILinkable extends ILink {
  direction?: "row" | "column";
  isBlank?: boolean;
}

export interface IButton extends ILink {
  icon?: string;
  isSolid?: boolean;
}
