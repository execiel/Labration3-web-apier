import express, { Request, Response } from "express";
import * as path from "path";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes";
import api from "./api";
import { connectDatabase } from "./util/database";

// Setup
const app = express();
dotenv.config();

// Use JSON
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));

// Connect to database
connectDatabase();

// call routes
routes(app);

// Call requests
api(app);

app.listen(process.env.PORT, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);
