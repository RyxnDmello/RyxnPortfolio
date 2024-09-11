import dotenv from "dotenv";
import configuration from "./Configuration";

dotenv.config();

const postServiceEmail = (
  name: string,
  email: string,
  description: string,
  designation?: string
) => {
  const template = {
    sender: {
      email: process.env.BREVO_EMAIL_ADDRESS as string,
      name: process.env.BREVO_EMAIL_NAME as string,
    },
    params: {
      NAME: name,
      DESCRIPTION: description,
      DESIGNATION: designation,
    },
    templateId: parseInt(process.env.BREVO_SERVICE_TEMPLATE as string),
    to: [{ name, email }],
  };

  configuration(template);
};

export default postServiceEmail;
