import express, { Request, Response } from "express";
import * as path from "path";
import bodyparser from "body-parser";
import dotenv from "dotenv";

// Setup
const app = express();
dotenv.config();

// Include public path
// app.use(express.static(path.join(__dirname, "public")));

// Use JSON
app.use(bodyparser.json());

interface PostTest {
  name: string;
  age: number;
}

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.post("/api/TestPost", (req: Request<{}, {}, PostTest>, res: Response) => {
  console.log(req.body);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);
