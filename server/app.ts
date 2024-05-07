import dotenv from "dotenv";
import Express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

import { connectDatabase } from "./database/DatabaseManager";

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

connectDatabase();

app.use("/contacts", contactsRouter);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
