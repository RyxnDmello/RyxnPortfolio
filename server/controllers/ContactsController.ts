import { Request, Response } from "express";

import { mailer } from "../emails/Mailer";

export const contacts = async (req: Request, res: Response) => {
  console.log("CONTACT: ");
  console.log(req.body);

  mailer(req.body.type, req.body.name, req.body.email, req.body.description);
  return;
};
