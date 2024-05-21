import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

export const connectDatabase = async () => {
  await connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`, {
    appName: "Services",
    retryWrites: true,
    retryReads: true,
  });
};
