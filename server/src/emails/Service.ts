import { renderFile } from "ejs";
import { join } from "path";

import transporter from "./Transporter";

import { Service } from "../models/ServiceModel";

const sendService = async (service: Service) => {
  const file = join(__dirname, "..", "..", "emails", "service.ejs");
  const render = await renderFile(file, { ...service });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Service Request!",
    html: render,
  });
};

export default sendService;
