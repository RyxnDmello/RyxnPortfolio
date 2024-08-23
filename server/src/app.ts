import dotenv from "dotenv";
import Express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

import connectMongoDB from "./services/mongoService";

import serviceRouter from "./routes/serviceRouter";

dotenv.config();

const app: Application = Express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["POST"],
  })
);

connectMongoDB();

app.use("/api/service", serviceRouter);

export default app;
