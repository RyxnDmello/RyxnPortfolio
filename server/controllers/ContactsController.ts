import { Request, Response } from "express";

import { createComment } from "../database/CommentManager";

import { sender, receiver } from "../emails/Mailer";

export const comment = async (req: Request, res: Response) => {
  await createComment(req.body);
};

export const service = async (req: Request, res: Response) => {
  await sender("Swarup", "ryanndmello10@gmail.com");

  await receiver(
    req.body.type,
    req.body.name,
    req.body.email,
    req.body.number,
    req.body.designation,
    req.body.description
  );
};
