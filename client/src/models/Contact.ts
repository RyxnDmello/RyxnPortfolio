import { IOption, IInput, ContactType } from "../interfaces/Contact";

import Name from "../images/inputs/username.png";
import Email from "../images/inputs/email.png";
import Designation from "../images/inputs/designation.png";
import Number from "../images/inputs/number.png";
import Description from "../images/inputs/description.png";

export const options: IOption[] = [
  {
    name: "Drop A Comment",
    type: ContactType.Comment,
  },
  {
    name: "Web Development",
    type: ContactType["Web Application"],
  },
  {
    name: "Mobile Development",
    type: ContactType["Mobile Application"],
  },
  {
    name: "UI • UX App Design",
    type: ContactType["UI • UX App Design"],
  },
];

export const inputs: IInput[] = [
  {
    icon: Name,
    label: "Name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    icon: Designation,
    label: "Designation",
    name: "designation",
    type: "text",
    required: false,
  },
  {
    icon: Number,
    label: "Number",
    name: "number",
    type: "number",
    required: false,
  },
  {
    icon: Description,
    label: "Description",
    name: "description",
    type: "textarea",
    required: true,
  },
];
