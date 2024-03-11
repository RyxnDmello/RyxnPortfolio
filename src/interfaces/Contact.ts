export interface IContact {
  name: string;
  email: string;
  number: string;
  type: string;
  description: string;
}

export interface IInput {
  label: string;
  icon: string;
  name: string;
  value?: string;
  type: "text" | "textarea" | "email" | "number";
  onChange?: (identifier: string, value: string) => void;
}
