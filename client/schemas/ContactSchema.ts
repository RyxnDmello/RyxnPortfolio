import * as yup from "yup";

import { Contact } from "../interfaces/Contact";

export const validationSchema = yup.object<Contact>().shape({
  name: yup
    .string()
    .trim()
    .min(4, "Name must be a minimum of 4 characters")
    .max(50, "Name must be a maximum of 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address provided")
    .required("Email address is required"),
  designation: yup
    .string()
    .trim()
    .min(4, "Name must be a minimum of 4 characters")
    .max(50, "Name must be a maximum of 50 characters"),
  number: yup
    .number()
    .nullable()
    .test("digit", "Mobile number must start with 6, 7, 8, or 9", (value) => {
      if (!value) return true;
      return ["6", "7", "8", "9"].includes(value.toString().charAt(0));
    })
    .test("length", "Mobile number must be 10 digits", (value) => {
      if (!value) return true;
      return value.toString().length === 10;
    }),
  description: yup
    .string()
    .trim()
    .min(10, "Description must be a minimum of 10 characters")
    .max(250, "Description must be a maximum of 250 characters")
    .required("Description is required"),
});
