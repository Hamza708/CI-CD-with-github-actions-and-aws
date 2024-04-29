import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(
  morgan(":method :url :status - :response-time ms - :res[content-length]")
);
app.use(cors());
app.use(cookieParser());
// will apply to all requests incoming to the app
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

export default app;
