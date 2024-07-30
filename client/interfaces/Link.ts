export interface Link {
  url: string;
  text: string;
  solid: boolean;
}

export interface Button extends Link {
  icon?: string;
}
