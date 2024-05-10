import { Request, Response } from "express";

import { createComment } from "../database/CommentManager";
import { createService } from "../database/ServiceManager";

import { sender, receiver } from "../emails/Mailer";

export const comment = async (req: Request, res: Response) => {
  await createComment(req.body);
  await sender(req.body.name, req.body.email);
};

export const service = async (req: Request, res: Response) => {
  await createService(req.body);
  await sender(req.body.name, req.body.email);
  await receiver(req.body.type, req.body);
};
