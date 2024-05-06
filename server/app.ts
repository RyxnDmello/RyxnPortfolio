import dotenv from "dotenv";
import Express, { Application, Request, Response } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

import contactsRouter from "./routes/Contacts";

dotenv.config();

const app: Application = Express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CLIENT_CORS,
    methods: ["GET", "POST"],
  })
);

app.use("/contacts", contactsRouter);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
