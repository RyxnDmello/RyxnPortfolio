import { Request, Response } from "express";

import createService from "../database/createService";

import sendComment from "../emails/Comment";
import sendService from "../emails/Service";

export const create = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);

    if (service.type === "Comment") {
      await sendComment(service.name, service.email);
    }

    if (service.type !== "Comment") {
      await sendService(service);
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
