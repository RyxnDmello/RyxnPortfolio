import dotenv from "dotenv";
import { Request, Response } from "express";

import createService from "../database/createService";

import postAppreciationEmail from "../emails/Appreciation";
import postServiceEmail from "../emails/Service";

dotenv.config();

export const create = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);

    if (service.type === "Comment") {
      postAppreciationEmail(service.name, service.email);
    }

    if (service.type !== "Comment") {
      postServiceEmail(
        service.name,
        service.email,
        service.description,
        service.designation
      );
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
