import dotenv from "dotenv";
import { connection, connect, disconnect } from "mongoose";

dotenv.config();

const connectMongoDB = async () => {
  try {
    await connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`, {
      serverApi: {
        deprecationErrors: true,
        strict: true,
        version: "1",
      },
      appName: process.env.MONGODB_APP,
      retryWrites: true,
      retryReads: true,
    });

    if (!connection.db) {
      throw new Error("MongoDB Connection Failed");
    }

    await connection.db.admin().ping();
  } catch (error) {
    console.log(`MongoDB Error: ${error instanceof Error && error.message}`);
    await disconnect();
    process.exit();
  }
};

export default connectMongoDB;
