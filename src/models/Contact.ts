import { IInput } from "../interfaces/Contact";

import Name from "../images/inputs/username.png";
import Email from "../images/inputs/email.png";
import Number from "../images/inputs/number.png";
import Description from "../images/inputs/description.png";

export const options: string[] = [
  "Drop A Comment",
  "Web Development",
  "Mobile Development",
  "UI • UX App Design",
];

export const inputs: IInput[] = [
  {
    icon: Name,
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    icon: Number,
    label: "Number",
    name: "number",
    type: "number",
  },
  {
    icon: Description,
    label: "Description",
    name: "description",
    type: "textarea",
  },
];
