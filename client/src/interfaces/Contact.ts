import { ChangeEvent } from "react";

export enum ContactType {
  "Comment",
  "Web Application",
  "Mobile Application",
  "UI • UX App Design",
}

export interface IContact {
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

export interface IOptional {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
}

export interface IInput {
  label: string;
  icon: string;
  name: string;
  value?: string;
  error?: boolean;
  required: boolean;
  type: "text" | "textarea" | "email" | "number";
  onChange?: (event: ChangeEvent) => void;
}

export interface IToaster {
  title: string;
  description: string;
}
