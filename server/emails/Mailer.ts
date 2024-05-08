import dotenv from "dotenv";
import nodemailer from "nodemailer";
import ejs from "ejs";

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

export const receiver = async (
  type: string,
  name: string,
  email: string,
  number: number,
  designation: string,
  description: string
) => {
  const render = await ejs.renderFile(__dirname + "/Receiver.ejs", {
    type,
    name,
    email,
    number,
    designation,
    description,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Service Request!",
    html: render,
  });
};

export const sender = async (name: string, email: string) => {
  const render = await ejs.renderFile(__dirname + "/Sender.ejs", { name });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank You for Your Feedback!",
    html: render,
  });
};
