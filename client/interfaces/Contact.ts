import { HTMLInputTypeAttribute, ChangeEvent } from "react";
import { StaticImageData } from "next/image";

export type CONTACT =
  | "Comment"
  | "Web Application"
  | "Mobile Application"
  | "UI • UX App Design";

export interface Contact {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  description: string;
}

export interface Option {
  type: CONTACT;
  name: string;
}

export interface Input {
  label: string;
  icon: StaticImageData;
  name: string;
  value?: string;
  error?: boolean;
  required: boolean;
  type: HTMLInputTypeAttribute;
  onChange?: (event: ChangeEvent) => void;
}
