import commentModel from "./models/Comment";

import { IComment } from "../interfaces/Contact";

export const createComment = async (comment: IComment) => {
  const newComment = new commentModel(comment);
  await newComment.save();
};
