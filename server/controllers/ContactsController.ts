import { Request, Response } from "express";

import { createComment } from "../database/CommentManager";

import { sender, receiver } from "../emails/Mailer";

export const comment = async (req: Request, res: Response) => {
  await createComment(req.body);
  sender(req.body.name, req.body.email);
  receiver("Comment", req.body.description);
};
