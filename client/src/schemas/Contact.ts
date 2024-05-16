import * as yup from "yup";

import { IContact } from "../interfaces/Contact";

export const validationSchema = yup.object<IContact>().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  designation: yup.string().trim(),
  number: yup.number(),
  description: yup.string().min(10).trim().required(),
});
