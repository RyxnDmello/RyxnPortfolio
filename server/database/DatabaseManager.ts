import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

export const connectDatabase = async () => {
  await connect(`${process.env.DATABASE_URI}/${process.env.DATABASE}`, {
    appName: "Services",
    retryWrites: true,
    retryReads: true,
  });
};
