import dotenv from "dotenv";

import app from "./src/app";

dotenv.config();

const BACK_URL: string = process.env.BACKEND_URL!;
const APP_PORT: string = process.env.APP_PORT!;

app
  .listen(APP_PORT, () => {
    console.info(
      "\n",
      "\x1b[33m",
      ` Server is listening on port \x1b[1m${APP_PORT}\x1b[0m.\n`,
      "\x1b[0m\n",
      "\x1b[33m",
      ` ➜\x1b[0m\x1b[1m  BackURL\x1b[0m: \x1b[36m${BACK_URL}\x1b[1m${APP_PORT}/api/\x1b[0m`,
      "\x1b[0m"
    );
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
