import { renderFile } from "ejs";
import { join } from "path";

import transporter from "./Transporter";

const postComment = async (name: string, email: string) => {
  const file = join(__dirname, "..", "..", "emails", "comment.ejs");
  const render = await renderFile(file, { name });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank You For Your Feedback!",
    attachments: [
      {
        filename: "banner.jpg",
        path: join(__dirname, "..", "..", "emails", "images", "banner.png"),
        cid: "banner",
      },
      {
        filename: "github.png",
        path: join(__dirname, "..", "..", "emails", "images", "github.png"),
        cid: "github",
      },
      {
        filename: "instagram.png",
        path: join(__dirname, "..", "..", "emails", "images", "instagram.png"),
        cid: "instagram",
      },
      {
        filename: "linkedin.png",
        path: join(__dirname, "..", "..", "emails", "images", "linkedin.png"),
        cid: "linkedin",
      },
      {
        filename: "whatsapp.png",
        path: join(__dirname, "..", "..", "emails", "images", "whatsapp.png"),
        cid: "whatsapp",
      },
    ],
    html: render,
  });
};

export default postComment;
