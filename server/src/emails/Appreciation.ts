import dotenv from "dotenv";
import configuration from "./Configuration";

dotenv.config();

const postAppreciationEmail = (name: string, email: string) => {
  const template = {
    sender: {
      email: process.env.BREVO_EMAIL_ADDRESS as string,
      name: process.env.BREVO_EMAIL_NAME as string,
    },
    templateId: parseInt(process.env.BREVO_APPRECIATION_TEMPLATE as string),
    params: { NAME: name },
    to: [{ name, email }],
  };

  configuration(template);
};

export default postAppreciationEmail;
