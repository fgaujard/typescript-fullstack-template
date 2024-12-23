import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router";

const app: Application = express();

dotenv.config();

const frontendUrl: string = process.env.FRONTEND_URL!;

app.use(
  cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api", router);

export default app;
