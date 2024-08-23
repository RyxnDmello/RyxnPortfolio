import { Schema, model } from "mongoose";

export type SERVICE =
  | "Comment"
  | "Web Application"
  | "Mobile Application"
  | "UI • UX App Design";

export interface Service {
  type: SERVICE;
  name: string;
  email: string;
  mobile: number;
  designation: string;
  description: string;
}

const serviceSchema = new Schema<Service>({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: [4, "Name Must Be A Minimum of 4 Characters"],
    maxlength: [50, "Name Must Be A Maximum of 50 Characters"],
  },
  mobile: {
    type: Schema.Types.Number,
    required: false,
    min: [
      6000000000,
      "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
    ],
    max: [
      9999999999,
      "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9",
    ],
  },
  designation: {
    type: Schema.Types.String,
    required: false,
    minlength: [4, "Designation Must Be A Minimum of 4 Characters"],
    maxlength: [50, "Designation Must Be A Maximum of 50 Characters"],
    default: "",
  },
  description: {
    type: Schema.Types.String,
    required: true,
    minlength: [4, "Description Must Be A Minimum of 4 Characters"],
    maxlength: [250, "Description Must Be A Maximum of 250 Characters"],
  },
});

const ServiceModel = model("service", serviceSchema);

export default ServiceModel;
