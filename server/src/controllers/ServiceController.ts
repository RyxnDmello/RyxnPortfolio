import { Request, Response } from "express";

import createService from "../database/createService";

import postComment from "../emails/Comment";
import postService from "../emails/Service";

export const create = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);

    if (service.type === "Comment") {
      await postComment(service.name, service.email);
    }

    if (service.type !== "Comment") {
      await postService(service);
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
