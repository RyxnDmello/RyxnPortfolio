import { renderFile } from "ejs";
import { join } from "path";

import transporter from "./Transporter";

const sendComment = async (name: string, email: string) => {
  const file = join(__dirname, "..", "..", "emails", "comment.ejs");
  const render = await renderFile(file, { name });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank You for Your Feedback!",
    html: render,
  });
};

export default sendComment;
