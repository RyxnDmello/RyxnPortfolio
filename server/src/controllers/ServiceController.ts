import { Request, Response } from "express";

import createService from "../database/createService";

import postAppreciationEmail from "../emails/Appreciation";

export const create = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);

    if (service.type === "Comment") {
      await postAppreciationEmail(service.email, service.name);
    }

    if (service.type !== "Comment") {
      await postAppreciationEmail(service.email, service.name);
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
