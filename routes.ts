import express, { Request, Response } from "express";
import * as path from "path";

export default function routes(app: any) {
  app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  app.get("/editor", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "/public/editor.html"));
  });
}
