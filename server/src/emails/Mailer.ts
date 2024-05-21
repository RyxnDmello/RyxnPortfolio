import dotenv from "dotenv";
import { join } from "path";
import nodemailer from "nodemailer";
import ejs from "ejs";

import { IContact } from "../interfaces/Contact";

dotenv.config();

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
});

export const receiver = async (type: string, contact: IContact) => {
  const file = join(__dirname, "..", "..", "emails", "Receiver.ejs");
  const render = await ejs.renderFile(file, { type, ...contact });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Service Request!",
    html: render,
  });
};

export const sender = async (name: string, email: string) => {
  const file = join(__dirname, "..", "..", "emails", "Sender.ejs");
  const render = await ejs.renderFile(file, { name });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank You for Your Feedback!",
    html: render,
  });
};
