import { PublishData, CellData } from "./util/types";
import { Request, Response } from "express";
import spriteModel from "./util/models/sprite";

export default function requests(app: any) {
  app.post(
    "/api/publish",
    async (req: Request<{}, {}, PublishData>, res: Response) => {
      const { title, alias, cells } = req.body;
      try {
        // Validate information
        // TODO: Make sure user hasn't posted more than five times that day
        if (!title || !alias || !cells) {
          console.log("Values undefined in /api/publish");
          return res.json({ status: "bad", message: "Something went wrong" });
        }

        if (title.length > 200 || alias.length > 50) {
          return res.json({ status: "bad", message: "title or alias to long" });
        }

        await spriteModel.create(req.body);
        return res.json({ status: "ok", message: "ok" });
      } catch (e: any) {
        console.log("Error caught in /api/publish", e.code);
        return res.json({ status: "bad", message: "Something went wrong" });
      }
    }
  );
}
