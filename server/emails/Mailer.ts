import dotenv from "dotenv";
import nodemailer from "nodemailer";

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

export const receiver = (type: string, description: string) => {
  const config = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: type.toString(),
    text: description,
  };

  transporter.sendMail(config, (error) => {
    if (error) return;
    console.log("EMAIL RECEIVED | SUCCESS");
  });
};

export const sender = (name: string, email: string) => {
  const config = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank You for Your Inquiry",
    html: `
    Hey ${name},
    <br><br>
    
    Thank you sincerely for reaching out! Your interest means the world to us. We're dedicated to providing the best experience possible and would love for you to explore our website further. 
    Feel free to share it with your friends and family to help us expand our community. Your support is invaluable in our journey to grow and improve.
    <br><br>
    
    Best Regards,<br>
    RyxnDmello
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  };

  transporter.sendMail(config, (error) => {
    if (error) return;
    console.log("EMAIL SENT | SUCCESS");
  });
};
