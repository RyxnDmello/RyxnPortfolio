export enum ContactType {
  "Comment",
  "Web Application",
  "Mobile Application",
  "UI • UX App Design",
}

export interface IContact {
  type: ContactType;
  name: string;
  email: string;
  number: string;
  designation: string;
  description: string;
}

export interface IOption {
  name: string;
  type: ContactType;
}

export interface IInput {
  label: string;
  icon: string;
  name: string;
  value?: string;
  type: "text" | "textarea" | "email" | "number";
  onChange?: (identifier: string, value: string) => void;
}
