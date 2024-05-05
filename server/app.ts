import dotenv from "dotenv";
import Express, { Application, Request, Response } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

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

app.get("/test", (req: Request, res: Response) => {
  res.send({
    type: "Test",
    value: "Comment",
  });
});

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
