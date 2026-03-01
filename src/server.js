import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import dbConnect from "./db/dbConnect.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = 3000;
dbConnect();

app.listen(PORT, () => {
  console.log(`App Listen in the PORT: ${PORT}`);
});
